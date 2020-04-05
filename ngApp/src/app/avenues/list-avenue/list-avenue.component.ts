import { Component, OnInit, Input } from '@angular/core';
import { Avenues } from 'src/app/models/avenues';

@Component({
  selector: 'app-list-avenue',
  templateUrl: './list-avenue.component.html',
  styleUrls: ['./list-avenue.component.css']
})
export class ListAvenueComponent implements OnInit {

  @Input() data: Avenues
  constructor() { }

  ngOnInit(): void {
  }

}
