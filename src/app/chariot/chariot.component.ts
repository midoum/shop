import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { produit } from '../produit';

import { chariotservice } from '../chariotservice';


@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {
  chariot:produit[]=[];
  constructor(private c:chariotservice) { 
 this.chariot=c.getChariot();
 console.log(this.chariot)
 
    
 
 
  }



  ngOnInit(): void {
  
  }
  SommeProduit(){
    var somme =0;
    for(var i=0;i<this.chariot.length;i++){
      var prod=this.chariot[i];
      somme+=this.chariot[i].prix;
    }
    return somme;
  }
}
