import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { produit } from '../produit';
import * as firebase from 'firebase';
import { chariotservice } from '../chariotservice';
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from '../Authservice';





@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {

  chariot:produit[]=[];
 
  constructor(private c:chariotservice,private authservice:AuthService,) { 
    const config = {
      apiKey: "AIzaSyCes1086y_q4-mpWHXBg1e2wkprD6YWXX8",
      authDomain: "shop-b2639.firebaseapp.com",
      databaseURL: "https://shop-b2639.firebaseio.com",
      projectId: "shop-b2639",
      storageBucket: "shop-b2639.appspot.com",
      messagingSenderId: "909077061093",
      appId: "1:909077061093:web:1a5d5976be1ff6423fe30c",
      measurementId: "G-CV7R0GWGX2"
    };
    firebase.initializeApp(config);
 
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
