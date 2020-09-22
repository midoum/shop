import { NgModule } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';

import {ChariotComponent} from '../app/chariot/chariot.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'acceuil',component:AcceuilComponent},
{path:'chariot',component:ChariotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){

  }

}
