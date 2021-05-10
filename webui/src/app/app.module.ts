import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { BaseMaterialModule } from './base-materials';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EyeballerComponent } from './components/eyeballer/eyeballer.component';

@NgModule({
  declarations: [
    AppComponent,
    EyeballerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    BrowserAnimationsModule,
    BaseMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
