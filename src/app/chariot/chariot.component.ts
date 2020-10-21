import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { produit } from '../produit';

import { chariotservice } from '../chariotservice';


import { InitialNavigation, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {
showSpinner:boolean=false;
  chariot:produit[]=[];
  data=[];
  p=[];
  constructor(private c:chariotservice,private router:Router,private http:HttpClient) { 
    
 
 this.chariot=c.getChariot();
 
 
   
   
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
  if(this.chariot.length>0){
this.showSpinner=true;
setTimeout(()=>{
  var i=0;
  while(this.chariot[i]!=null){
  this.http.post('http://localhost/insert.php',this.chariot[i]).subscribe(()=>{
  
        },error => console.error(error));
  this.showSpinner=false;
  i++;
}
 
  alert("Merci de valider vos achats");
  this.chariot.splice(0,this.chariot.length);
},4000);
}else {
  alert("Votre chariot est vide");

}}

}
