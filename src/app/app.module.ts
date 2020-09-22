import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefrigirateurComponent } from './refrigirateur/refrigirateur.component';
import { FourComponent } from './four/four.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { ChariotComponent } from './chariot/chariot.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { chariotservice } from './chariotservice';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Authservice';


const firebaseConfig = {
  apiKey: "AIzaSyCes1086y_q4-mpWHXBg1e2wkprD6YWXX8",
    authDomain: "shop-b2639.firebaseapp.com",
    databaseURL: "https://shop-b2639.firebaseio.com",
    projectId: "shop-b2639",
    storageBucket: "shop-b2639.appspot.com",
    messagingSenderId: "909077061093",
    appId: "1:909077061093:web:1a5d5976be1ff6423fe30c",
    measurementId: "G-CV7R0GWGX2"
};

@NgModule({
  declarations: [
    AppComponent,
    RefrigirateurComponent,
    FourComponent,
    OrdinateurComponent,
    SmartphoneComponent,
    ChariotComponent,
    AcceuilComponent,
    LoginComponent,
    
  
  ],
  imports: [
   
    MatBadgeModule,
    BrowserModule,
    AppRoutingModule,
   
   
  ],
  exports: [MatBadgeModule],
 
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    chariotservice,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
