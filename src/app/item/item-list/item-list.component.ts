import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared';

@Component({
  selector: 'item-list',
  templateUrl: './item-details-list.component.html',
  styleUrls: ['./item-details-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
