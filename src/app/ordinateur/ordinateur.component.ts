import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { produit } from '../produit';
@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
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
  constructor() { }

  ngOnInit(): void {
  }

}
