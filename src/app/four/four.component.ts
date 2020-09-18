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
   {name:'Galanz',description:' Four éléctrique de marque ganalz',prix:100,image:'Galanz.png'},
   {name:'Kitchenaid',description:' Four éléctrique de marque kitchenaid',prix:100,image:'kitchenaid.png'},

 ];

;

 
  constructor() { 

  }

  ngOnInit(): void {
  }

}
