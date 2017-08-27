import { Component, Input } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'item-display-card',
  templateUrl: './item-display-card.component.html',
  styleUrls: ['./item-display-card.component.scss']
})
export class ItemDisplayCardComponent {

  @Input() item: Item;

  private navigateToGithubProject(): void {
    window.open(this.item.actionUrl);
  }
}
