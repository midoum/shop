import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Router } from '@angular/router';
import {produit} from 'src/app/produit';
import { chariotservice } from '../chariotservice';
import { detail } from '../detail';
var x=0;
export var naf,prf,descf,imf;
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

 
  constructor(private c:chariotservice,private router:Router,private dservice:detail) { 

  }

  ngOnInit(): void {
  }
  ajouter(name,description,prix,url){
 
     
    this.c.addChariot(name,description,prix,url);
    console.log(this.c.getChariot())
  }
  Detail(n,d,p,i){
    this.dservice.adddetail(n,d,p,i);
    
    this.router.navigate(['detail']);
    }
  
}
