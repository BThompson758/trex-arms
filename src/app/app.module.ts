import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MidnavComponent } from './header/midnav.component';
import { Nav1Component } from './header/nav1.component';
import { Nav2Component } from './header/nav2.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Nav2Component,
    MidnavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
