import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-refrigirateur',
  templateUrl: './refrigirateur.component.html',
  styleUrls: ['./refrigirateur.component.css']
})
export class RefrigirateurComponent implements OnInit {
  @Input() Refri:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
