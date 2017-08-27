import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../core';

@Component({
  selector: 'item-details-list',
  templateUrl: './item-details-list.component.html',
  styleUrls: ['./item-details-list.component.css']
})
export class ItemDetailsListComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
