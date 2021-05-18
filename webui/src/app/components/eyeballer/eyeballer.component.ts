import { Component, OnInit } from '@angular/core';
import * as base64 from 'base64-arraybuffer';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-eyeballer',
  templateUrl: './eyeballer.component.html',
  styleUrls: ['./eyeballer.component.scss']
})
export class EyeballerComponent implements OnInit {

  offset = tf.scalar(127.5);
  images = new Map<string, string>();
  confidence = 0.5;

  width = 224;
  height = 224;

  tfFilesCompleted = false;
  tfFiles: File[] = [];

  maxWorkers = 20;
  imageCount = 0;
  loadedCount = 0;
  finishedLoading = false;
  eyeballing = false;
  eyeballCompleted = false;
  eyeballedCount = 0;
  classifications = {
    custom404: [],
    loginPage: [],
    webapp: [],
    oldLooking: [],
    parked: [],
  };

  // What labels are selected?
  // This is a tri-state:
  //  0 means "always select"
  //  1 means "don't care"
  //  2 means "never select"
  selected = {
    custom404: 2,
    loginPage: 1,
    webapp: 0,
    oldLooking: 1,
    parked: 2,
  }

  selectedScreens: string[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchTfFiles();
  }

  async onSelect(event) {
    this.imageCount = event.addedFiles.length;
    await Promise.all(event.addedFiles.map(async (file) => {
      const dataString = await this.dataURI(file);
      this.images.set(file.name, dataString);
    }));
  }

  onRemove(event) {
    this.images.delete(event.name);
  }

  isWebapp(key) {
    if(this.classifications.webapp.includes(key)) {
      return "Webapp"
    }
    return ""
  }
  isCustom404(key) {
    if(this.classifications.custom404.includes(key)) {
      return "Custom 404"
    }
    return ""
  }
  isLoginPage(key) {
    if(this.classifications.loginPage.includes(key)) {
      return "Login Page"
    }
    return ""
  }
  isOldLooking(key) {
    if(this.classifications.oldLooking.includes(key)) {
      return "Old Looking"
    }
    return ""
  }
  isParked(key) {
    if(this.classifications.parked.includes(key)) {
      return "Parked Domain"
    }
    return ""
  }

  async fetchTfFiles() {
    let resp = await fetch('/assets/tf/model.json');
    const manifest = await resp.json();
    const paths: string[] = Array.from(manifest.weightsManifest[0]?.paths);

    this.tfFiles = [];
    resp = await fetch('/assets/tf/model.json');
    const blob = await resp.blob();
    this.tfFiles.push(new File([blob], 'model.json'));
    await Promise.all(paths.map(async (path) => {
      const tfFile = await this.fetchTfFile(path);
      this.tfFiles.push(tfFile);
    }));
    this.tfFilesCompleted = true;
  }

  async fetchTfFile(name: string): Promise<File> {
    const base = name.split('/').reverse()[0];
    const resp = await fetch(`/assets/tf/${base}`);
    const blob = await resp.blob();
    return new File([blob], base);
  }

  async startEyeball() {
    await this.executeQueue();
    await this.updateSelections();
  }

  async updateSelections() {
    // First thing: load up all the images into the set
    let selectedScreensSet = new Set([]);
    for (let entry of this.classifications.webapp) {
      selectedScreensSet.add(entry);
    }
    for (let entry of this.classifications.oldLooking) {
      selectedScreensSet.add(entry);
    }
    for (let entry of this.classifications.loginPage) {
      selectedScreensSet.add(entry);
    }
    for (let entry of this.classifications.custom404) {
      selectedScreensSet.add(entry);
    }
    for (let entry of this.classifications.parked) {
      selectedScreensSet.add(entry);
    }
    let selectionsArray = Array.from(selectedScreensSet);

    // Calculate intersections for each "must include" selections
    if (this.selected.webapp === 0){
      let tempArray = selectionsArray.filter(value => this.classifications.webapp.includes(value));
      selectionsArray = tempArray;
    }
    if (this.selected.oldLooking === 0){
      let tempArray = selectionsArray.filter(value => this.classifications.oldLooking.includes(value));
      selectionsArray = tempArray;
    }
    if (this.selected.loginPage === 0){
      let tempArray = selectionsArray.filter(value => this.classifications.loginPage.includes(value));
      selectionsArray = tempArray;
    }
    if (this.selected.custom404 === 0){
      let tempArray = selectionsArray.filter(value => this.classifications.custom404.includes(value));
      selectionsArray = tempArray;
    }
    if (this.selected.parked === 0){
      let tempArray = selectionsArray.filter(value => this.classifications.parked.includes(value));
      selectionsArray = tempArray;
    }

    // Now remove any "Must not include" selection
    selectedScreensSet = new Set(selectionsArray);
    if (this.selected.webapp === 2){
      for (let entry of this.classifications.webapp) {
        selectedScreensSet.delete(entry);
      }
    }
    if (this.selected.oldLooking === 2){
      for (let entry of this.classifications.oldLooking) {
        selectedScreensSet.delete(entry);
      }
    }
    if (this.selected.loginPage === 2){
      for (let entry of this.classifications.loginPage) {
        selectedScreensSet.delete(entry);
      }
    }
    if (this.selected.custom404 === 2){
      for (let entry of this.classifications.custom404) {
        selectedScreensSet.delete(entry);
      }
    }
    if (this.selected.parked === 2){
      for (let entry of this.classifications.parked) {
        selectedScreensSet.delete(entry);
      }
    }
    this.selectedScreens = Array.from(selectedScreensSet);
  }

  async executeQueue(): Promise<void> {
    this.eyeballing = true;
    const model = await tf.loadLayersModel(tf.io.browserFiles(this.tfFiles));
    const keys = Array.from(this.images.keys());
    let numOfWorkers = 0;
    let taskIndex = 0;

    return new Promise((complete) => {
      const getNextTask = () => {
        if (numOfWorkers < this.maxWorkers && taskIndex < this.imageCount) {
          // Start the task
          const img = new Image(this.width, this.height);
          const key = keys[taskIndex];
          img.src = this.images.get(key);
          this.loadedCount++;
          img.onerror = () => {
            this.eyeballedCount++;
            if (this.eyeballedCount >= this.imageCount) {
              this.eyeballing = false;
              this.eyeballCompleted = true;
              this.updateSelections();
            }
            numOfWorkers--;
            getNextTask();
          }
          img.onload = () => {
            tf.tidy(() => {
              const tensor = tf.browser.fromPixels(img)
                .resizeNearestNeighbor([224, 224])
                .toFloat()
                .sub(this.offset)
                .div(this.offset)
                .expandDims();
              const resultTensor = <tf.Tensor<tf.Rank>> model.predict(tensor);
              const predictions = resultTensor.dataSync();
              tensor.dispose();
              resultTensor.dispose();
              if (predictions[0] > this.confidence) {
                this.classifications.custom404.push(key);
              }
              if (predictions[1] > this.confidence) {
                this.classifications.loginPage.push(key);
              }
              if (predictions[2] > this.confidence) {
                this.classifications.webapp.push(key);
              }
              if (predictions[3] > this.confidence) {
                this.classifications.oldLooking.push(key);
              }
              if (predictions[4] > this.confidence) {
                this.classifications.parked.push(key);
              }
              this.eyeballedCount++;

              if (this.eyeballedCount >= this.imageCount) {
                this.eyeballing = false;
                this.eyeballCompleted = true;
                this.updateSelections();
              }
              numOfWorkers--;
              getNextTask();
            });
          };

          taskIndex++;
          numOfWorkers++;
          // keep the chain going by calling ourselves
          getNextTask();
        } else if (numOfWorkers === 0 && taskIndex === this.imageCount) {
          complete();
        }
      };

      getNextTask();
    });
  }

  async dataURI(file: File): Promise<string> {
    const buf = await file.arrayBuffer();
    let ext = file.name.split('.').reverse()[0]?.toLocaleLowerCase();
    if (!["jpg", "jpeg", "png", "gif", "bmp"].some(allow => allow === ext)) {
      ext = "jpg";
    }
    return `data:image/${encodeURIComponent(ext)};base64,${base64.encode(buf)}`;
  }

  eyeballPercent() {
    return (this.eyeballedCount / this.imageCount) * 100;
  }

  loadPercent() {
    return (this.images.size / this.imageCount) * 100;
  }

  restart() {
    window.location.reload();
  }

  async exportResults() {
    const str = this.selectedScreens.join("\n");
    const blob = new Blob([str], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
