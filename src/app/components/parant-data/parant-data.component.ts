import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parant-data',
  templateUrl: './parant-data.component.html',
  styleUrls: ['./parant-data.component.css']
})
export class ParantDataComponent implements OnInit {
  @Input() name: String = '';

  @Input() userData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
