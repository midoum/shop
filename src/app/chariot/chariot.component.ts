import { Component, OnInit } from '@angular/core';
import { produit } from '../produit';

var n,d,p:any;
@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {

  constructor() { 
    this.chariot.push(new produit(n,d,p,''));
 
    
  }

 chariot:produit[]=[
  
  ];

  ngOnInit(): void {
   
  }
 Inserer(name,prix,description){
  n=name;
  p=prix;
  d=description;
  new ChariotComponent();
  console.log(this.chariot);
};
}
