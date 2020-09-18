import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  @Input() Ordin:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
