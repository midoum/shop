import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() sc:boolean=true;
@Input() si:boolean=false;
public books: FirebaseListObservable<Book[]>;

  constructor( private router:Router) { }

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
    this.router.navigate(['/acceuil']);
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
      alert("Connexion avec succès")
    }else {
      alert("l'email doit contenir @")
    
  }
}
}
}
