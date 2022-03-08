import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MidnavComponent } from './header/midnav.component';
import { Nav1Component } from './header/nav1.component';
import { Nav2Component } from './header/nav2.component';
import { smallCard } from './products/smallCard.component';
import { AppRoutingModule } from './app-routing.module';
import { SidecarComponent } from './routes/sidecar-layout.component';
import { HomeComponent } from './routes/home-layout.component';
import { MedicalComponent } from './routes/medical-layout.component';
import { PistolOpticsComponent } from './routes/pistolOptics-layout.component';
import { HelpComponent } from './routes/help-layout.component';
import { TrainingComponent } from './routes/training-layout.component';
import { productCard } from './products/productCard.component';
import { myAccountComponent } from './routes/myAccount-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountDetailsComponent } from './routes/acctDetails-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    MidnavComponent,
    smallCard,
    FooterComponent,
    SidecarComponent,
    HomeComponent,
    MedicalComponent,
    PistolOpticsComponent,
    HelpComponent,
    TrainingComponent,
    productCard,
    myAccountComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
