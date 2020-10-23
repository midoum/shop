import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Router } from '@angular/router';
import { chariotservice } from '../chariotservice';
import { detail } from '../detail';
import { produit } from '../produit';
export var nar,descr,prr,imr;
@Component({
  selector: 'app-refrigirateur',
  templateUrl: './refrigirateur.component.html',
  styleUrls: ['./refrigirateur.component.css']
})
export class RefrigirateurComponent implements OnInit {
  @Input() Refri:boolean;
  refrigirateur:produit[]=[
    new produit('samsung','un grand refrigirateur de mark samsung avec un dispencer des cubes de glâce ',2500,'samsung.png',0),
    new produit('samsung','un mini-fridge de mark silver mini  ',700,'silvermini.png',0),
    new produit('samsung','un grand refrigirateur de mark Whirlpool avec un dispencer des cubes de glâce ',2800,'whirlpool.png',0),

  ]
  constructor(private c:chariotservice,private router:Router,private dservice:detail) { }

  ngOnInit(): void {
  }
  ajouter(name,description,prix,url){
 
     
    this.c.addChariot(name,description,prix,url);
    console.log(this.c.getChariot());
  }
  Detail(n,d,p,i){
    this.dservice.adddetail(n,d,p,i);
    
    this.router.navigate(['detail']);
    }
}
