import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor( private c:chariotservice,private router:Router) { 
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
 
      if (currentScrollPos<100) {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("item").style.color = "black";
        document.getElementById("item1").style.color = "black";
 
      } else {
        document.getElementById("navbar").style.backgroundColor = "gray";
        document.getElementById("item").style.color = "white";
        document.getElementById("item1").style.color = "white";
       
        
       
        
       
      }
      prevScrollpos = currentScrollPos;
    } 
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
