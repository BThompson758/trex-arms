import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidecarComponent } from './routes/sidecar-layout.component';
import { HomeComponent } from './routes/home-layout.component';
import { HelpComponent } from './routes/help-layout.component';
import { TrainingComponent } from './routes/training-layout.component';
import { PistolOpticsComponent } from './routes/pistolOptics-layout.component';
import { MedicalComponent } from './routes/medical-layout.component';
import { myAccountComponent } from './routes/myAccount-layout.component';
import { AccountDetailsComponent } from './routes/acctDetails-layout.component';
import { AddProductComponent } from './routes/add-product.component';

const routes:Routes = [
  {path: '', redirectTo: '/Home',pathMatch:'full'},
  {path: 'Sidecar', component: SidecarComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Help', component: HelpComponent},
  {path: 'Training', component: TrainingComponent},
  {path: 'PistolOptics', component: PistolOpticsComponent},
  {path: 'Medical', component: MedicalComponent},
  {path: 'MyAccount', component: myAccountComponent},
  {path: 'MyAccount/AccountDetails', component: AccountDetailsComponent},
  {path: 'Admin', component: AddProductComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
