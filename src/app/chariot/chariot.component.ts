import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { produit } from '../produit';

import { chariotservice } from '../chariotservice';


import { Router } from '@angular/router';





@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {

  chariot:produit[]=[];
 
  constructor(private c:chariotservice,private router:Router) { 
    
 
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
  addindex(){
    for(var i=0;i<this.chariot.length;i++){
      return this.chariot.length;
    
    }
  }
    
  
  Supprimer(index){
    this.chariot.splice(index,1);
    console.log(index);

   
    
  }
addtoCart(){

}

}
