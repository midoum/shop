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


}
