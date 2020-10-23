import { Injectable } from '@angular/core';
import { produit } from './produit';

@Injectable({
    providedIn: 'root',
  })
export class detail{
  
    
    private Detailarray:produit[];
    constructor(){
        this.Detailarray=[];
    }
    adddetail(n,d,p,i){
        this.Detailarray=[];
        this.Detailarray.push(new produit(n,d,p,i,0));
    }
    getdetail(){
        return this.Detailarray;
    }
}