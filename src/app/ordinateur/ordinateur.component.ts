import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { produit } from '../produit';
import { chariotservice } from '../chariotservice';



@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  template:'  <h5 class="card-title" id="prodname">{{produit.name}}</h5>',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  @Input() Ordin:boolean;
 
 
  ordins :produit[]=[
new produit('Dell core i5','Ordinateur pour travail et programming equipé du processeur intel core i5',1800,'Dellcorei5.png'),
new produit('Hp Elitebook','Ordinateur pour gaming et programming equipé du processeur intel core i7 8Gb ram et 500GB SSD',2300,'Hpelitebook.png'),
new produit('Hppavillon','Ordinateur chic et puissance équipé du processeur amd ryzen 5 16gb de ram et 1000GB HDD',2900,'Hppavillon.png'),
new produit('Macbook pro ','Ordinateur pour travail et montage video  equipé du processeur intel core i7 8gb ram et 500GB SSD',3700,'Dellcorei5.png'),
  ];
  
  constructor(private c:chariotservice) { }
  
  ngOnInit(): void {
  }
  
 ajouter(name,description,prix,url){
 
     
  this.c.addChariot(name,description,prix,url);
  console.log(this.c.getChariot());
}


}
