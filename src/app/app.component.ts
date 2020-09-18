import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 showref:boolean=false;
 showordin:boolean=false;
 showfour:boolean=false;
 showsmart:boolean=false;
  title = 'shop';
  ToggleRef(){
    this.showref=!this.showref;
    this.showordin=false;
    this.showfour=false;
    this.showsmart=false;
  }
  ToggleOrdin(){
    this.showordin=!this.showordin;
    this.showref=false; 
    this.showfour=false;
    this.showsmart=false;
  }

  ToggleFour(){
    this.showfour=!this.showfour;
    this.showref=false;
    this.showordin=false;
    this.showsmart=false;
  }

  ToggleSmart(){
    this.showsmart=!this.showsmart;
    this.showref=false;
    this.showordin=false;
    this.showfour=false;
    
  }


}
