import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../Authservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() sc:boolean=true;
@Input() si:boolean=false;


  constructor( private router:Router,private authservice:AuthService ) {
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
  

  }

  ngOnInit(): void {
  }
showC(){
  this.sc=true;
  this.si=false;
  var emailc=((document.getElementById("emailc") as HTMLInputElement).value);
  var passc=((document.getElementById("passc") as HTMLInputElement).value);

if(emailc==""){
    alert("Tapez votre email")
  }else if(passc==""){
    alert("Tapez votre mot de passe")
  }else{  
    if(emailc.match("@")){
    alert("Connexion avec succès")
    this.authservice.signInUser(emailc,passc).then(()=>{
      this.router.navigate(['/acceuil']);
    },(error)=>{
      console.log(error);
      
    }
    );
   
  }else {
    alert("l'email doit contenir @")
  }
  }
  

}
showI(){
  this.si=true;
  this.sc=false
  var nom=((document.getElementById("nom") as HTMLInputElement).value);
  var prenom=((document.getElementById("prenom") as HTMLInputElement).value);
  var emaili=((document.getElementById("emaili") as HTMLInputElement).value);
  var passi=((document.getElementById("passi") as HTMLInputElement).value);
  var passci=((document.getElementById("passci") as HTMLInputElement).value);
  if(nom==""){
    alert("Tapez votre nom")
  }else  if(prenom==""){
    alert("Tapez votre prenom")
  }else  if(emaili==""){
    alert("Tapez votre email")
  }else  if(passi==""){
    alert("Tapez votre mot de passe")
  } else if(passci==""){
    alert("Tapez votre mot de passe à confirmé")
   

    }else  if(passi!==passci){
      alert("Les mots de passe doivent être conforme")
  }else {
     if(emaili.match("@")){
      this.authservice.createNewUser(emaili,passi).then(()=>{
        alert("Utilisateur crée avec succès")
      },

        (error)=>{
console.log(error);
        
      });
     
      

    }else {
      alert("l'email doit contenir @")
    
  }
}
}
}
