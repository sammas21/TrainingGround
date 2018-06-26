import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainAppComponent } from './main-app/main-app.component';
import { HomeComponent } from './home/home.component';
import { AbourComponent } from './abour/abour.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainAppComponent,
    HomeComponent,
    AbourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
