import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefrigirateurComponent } from './refrigirateur/refrigirateur.component';
import { FourComponent } from './four/four.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { ChariotComponent } from './chariot/chariot.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AcceuilComponent } from './acceuil/acceuil.component';
@NgModule({
  declarations: [
    AppComponent,
    RefrigirateurComponent,
    FourComponent,
    OrdinateurComponent,
    SmartphoneComponent,
    ChariotComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
