import { Injectable } from '@angular/core';
import {produit} from './produit'
@Injectable({
    providedIn: 'root',
  })
export class chariotservice{
    private chariot:produit[];
    constructor(){
    this.chariot=[];
    }
    addChariot(name,description,prix,url){
    this.chariot.push(new produit(name,description,prix,url,1));
    }
    getChariot(){
        return this.chariot;
    }
}