import { NgModule } from '@angular/core';

import { Routes, RouterModule, } from '@angular/router';
import {ChariotComponent} from '../app/chariot/chariot.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
{path:'',component:AcceuilComponent},
{path:'acceuil',component:AcceuilComponent},
{path:'chariot',component:ChariotComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){

  }

}
