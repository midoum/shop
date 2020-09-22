import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() sc:boolean=true;
@Input() si:boolean=false;
emailc=(document.getElementById('emailc')as HTMLInputElement).value;
emaili=(document.getElementById('emaili')as HTMLInputElement).value;
passc=(document.getElementById('passc')as HTMLInputElement).value;
passi=(document.getElementById('passi')as HTMLInputElement).value;
passci=(document.getElementById('passci')as HTMLInputElement).value;
nom=(document.getElementById('nom')as HTMLInputElement).value;
prenom=(document.getElementById('prenom')as HTMLInputElement).value;
  constructor() { }

  ngOnInit(): void {
  }
showC(){
  this.sc=true;
  this.si=false;

}
showI(){
  this.si=true;
  this.sc=false
  
}
}
