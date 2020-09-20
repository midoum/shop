import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { produit } from '../produit';
import { OrdinateurComponent } from '../ordinateur/ordinateur.component';
let c=new OrdinateurComponent;
@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.css']
})

export class ChariotComponent implements OnInit {
  chariot:produit[]=[];
  constructor() { 
 this.chariot=c.getCart();
    
 
 
  }



  ngOnInit(): void {
  
  }
  
}
