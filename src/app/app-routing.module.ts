import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidecarComponent } from './routes/sidecar-layout.component';
import { HomeComponent } from './routes/home-layout.component';
import { HelpComponent } from './routes/help-layout.component';
import { TrainingComponent } from './routes/training-layout.component';
import { PistolOpticsComponent } from './routes/pistolOptics-layout.component';
import { MedicalComponent } from './routes/medical-layout.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'Sidecar', component: SidecarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Help', component: HelpComponent},
  {path: 'Training', component: TrainingComponent},
  {path: 'PistolOptics', component: PistolOpticsComponent},
  {path: 'Medical', component: MedicalComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
