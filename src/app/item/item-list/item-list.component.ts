import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';

@Component({
  selector: 'item-list',
  template: `
    <div class="display-container">
      <div *ngFor="let item of items" class="display-content">
        <item [item]="item" [height]="height"></item>
      </div>
    </div>
    <md-grid-list cols="2" rowHeight="2:1">
      <md-grid-tile *ngFor="let item of items">
        <item [item]="item" [height]="height"></item>
      </md-grid-tile>
    </md-grid-list>
  `
})
export class ItemListComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() height: string;

  constructor() {}

  ngOnInit() {}

}
