import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {
  @Input() Smart:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
