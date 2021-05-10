import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EyeballerComponent } from './components/eyeballer/eyeballer.component';

const routes: Routes = [
  { path: '', component: EyeballerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
