import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Router } from '@angular/router';
import { chariotservice } from '../chariotservice';
import { detail } from '../detail';
import { produit } from '../produit';
export var nas,prs,descs,ims;
@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {
  @Input() Smart:boolean;
  smartphone :produit[]=[
    new produit('Galaxy s10','Smartphone de chez samsung Ram 6GB Rom 125GB precesseur snapdragon 858',1500,'galaxys10.png',0),
    new produit('Iphone X','Smartphone de chez Apple Ram 6GB Rom 258GB precesseur snapdragon 858',2300,'iphonex.png',0),
    new produit('Hppavillon','Smartphone de chez OnePlus Ram 6GB Rom 125GB precesseur snapdragon 855',2900,'Oneplus5t.png',0),
      ];
  constructor(private c:chariotservice,private router:Router, private dservice:detail) { }

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
