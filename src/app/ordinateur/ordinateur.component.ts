import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { produit } from '../produit';
import { chariotservice } from '../chariotservice';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { detail } from '../detail';

export var na,pr,desc,im;


@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  template:'  <h5 class="card-title" id="prodname">{{produit.name}}</h5>',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  
  @Input() Ordin:boolean;
 
 
  ordins  :produit[]=[
new produit('Dell core i5','Ordinateur pour travail et programming equipé du processeur intel core i5',1800,'Dellcorei5.png',0),
new produit('Hp Elitebook','Ordinateur pour gaming et programming equipé du processeur intel core i7 8Gb ram et 500GB SSD',2300,'Hpelitebook.png',0),
new produit('Hppavillon','Ordinateur chic et puissance équipé du processeur amd ryzen 5 16gb de ram et 1000GB HDD',2900,'Hppavillon.png',0),
new produit('Macbook pro ','Ordinateur pour travail et montage video  equipé du processeur intel core i7 8gb ram et 500GB SSD',3700,'MacbookPro.png',0),
  ];
  
  constructor(private c:chariotservice,private http:HttpClient,private router:Router,private dservice:detail) { }
  
  ngOnInit(): void {
    this.http.get('http://localhost/mypage.php').subscribe(data => {
      var i=0; 
      while(data[i]!=null){
        
        console.log(data[i]);
        this.ordins.push(data[i]);
        i++;
        
       }
       
      
        console.log(this.ordins)
        
        
        
        
        }, error => console.error(error));
    
       
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
