import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RefrigirateurComponent,
    FourComponent,
    OrdinateurComponent,
    SmartphoneComponent,
    ChariotComponent,
    AcceuilComponent,
    DetailComponent,
    
    
  
  ],
  imports: [
   
    MatBadgeModule,
    MatProgressSpinnerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
   
  ],
  exports: [MatBadgeModule],
 
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    chariotservice,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
