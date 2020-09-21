import { Component, Input, OnInit } from '@angular/core';
import { chariotservice } from '../chariotservice';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  @Input() matBadge:number;
  showref:boolean=false;
  showordin:boolean=true;
  showfour:boolean=false;
  showsmart:boolean=false;
  
  constructor( private c:chariotservice) { 
  
  }

  ngOnInit(): void {
  }
  ToggleRef(){
    this.showref=true;
    this.showordin=false;
    this.showfour=false;
    this.showsmart=false;
  }
  ToggleOrdin(){
    this.showordin=true;
    this.showref=false; 
    this.showfour=false;
    this.showsmart=false;
  }

  ToggleFour(){
    this.showfour=true;
    this.showref=false;
    this.showordin=false;
    this.showsmart=false;
  }

  ToggleSmart(){
    this.showsmart=true;
    this.showref=false;
    this.showordin=false;
    this.showfour=false;
    
  }
  getValue(){
  var f=this.c.getChariot().length;
  return f;  
   

  }
  }
