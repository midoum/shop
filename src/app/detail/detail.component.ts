import { Component, OnInit } from '@angular/core';
import { chariotservice } from '../chariotservice';
import { detail } from '../detail';
import { produit } from '../produit';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 details:produit[]=[];
  constructor(private c:chariotservice,private dservice:detail) {
    
   }
 
  ngOnInit(): void {
    this.details=this.dservice.getdetail();
    console.log(this.details[0]);
  }
  
  getValue(){
    var f=this.c.getChariot().length;
    return f;  
     
  
    }
    ajouter(n,d,p,i){
      this.c.addChariot(n,d,p,i);
    }

}
