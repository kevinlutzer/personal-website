import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared';

@Component({
  selector: 'item-list',
  template: `
    <div class="display-container">
      <div *ngFor="let item of items" class="display-content">
        <item [item]="item"></item>
      </div>
    </div>
  `
})
export class ItemListComponent implements OnInit {

  @Input() items: Item[] = [];
  @Input() height: string; 

  constructor() { }

  ngOnInit() {}

}
