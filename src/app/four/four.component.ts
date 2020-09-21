import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {produit} from 'src/app/produit';
import { chariotservice } from '../chariotservice';
var x=0;
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']

})
export class FourComponent implements OnInit {
  @Input() Four:boolean;
  

 fours:produit[]=[
  new produit('Galanz',' Four éléctrique de marque ganalz',100,'Galanz.png',0),
   new produit('Kitchenaid',' Four éléctrique de marque kitchenaid',100,'kitchenaid.png',0),
   new produit('Kitchenaid',' Four éléctrique de marque kitchenaid',100,'kitchenaid.png',0),
   new produit('Galanz',' Four éléctrique de marque ganalz',100,'Galanz.png',0)

 ];

;

 
  constructor(private c:chariotservice) { 

  }

  ngOnInit(): void {
  }
  ajouter(name,description,prix,url){
 
     
    this.c.addChariot(name,description,prix,url);
    console.log(this.c.getChariot())
  }
  
  
}
