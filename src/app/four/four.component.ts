import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {produit} from 'src/app/produit';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']

})
export class FourComponent implements OnInit {
  @Input() Four:boolean;
 fours:produit[]=[
  new produit('Galanz',' Four éléctrique de marque ganalz',100,'Galanz.png'),
   new produit('Kitchenaid',' Four éléctrique de marque kitchenaid',100,'kitchenaid.png'),
   new produit('Kitchenaid',' Four éléctrique de marque kitchenaid',100,'kitchenaid.png'),
   new produit('Galanz',' Four éléctrique de marque ganalz',100,'Galanz.png')

 ];

;

 
  constructor() { 

  }

  ngOnInit(): void {
  }

}
