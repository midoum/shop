import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmartphoneComponent} from 'src/app/smartphone/smartphone.component';
import {RefrigirateurComponent} from 'src/app/refrigirateur/refrigirateur.component';
import {FourComponent} from 'src/app/four/four.component';
import {OrdinateurComponent} from 'src/app/ordinateur/ordinateur.component';

const routes: Routes = [
  {path:'smartphone',component:SmartphoneComponent},
  {path:'refrigirateur',component:RefrigirateurComponent},
  {path:'four',component:FourComponent},
  {path:'ordinateur',component:OrdinateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
