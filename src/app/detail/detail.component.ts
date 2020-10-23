import { Component, OnInit } from '@angular/core';
import{pr,desc,im,na} from '../ordinateur/ordinateur.component'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() {
    var prix=pr;
    var description=desc;
    var image=im;
    var name=na;
   }

  ngOnInit(): void {
  }

}
