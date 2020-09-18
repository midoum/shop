import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefrigirateurComponent } from './refrigirateur/refrigirateur.component';
import { FourComponent } from './four/four.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    RefrigirateurComponent,
    FourComponent,
    OrdinateurComponent,
    SmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
