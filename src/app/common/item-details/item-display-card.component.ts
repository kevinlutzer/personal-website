import { Component, Input } from '@angular/core';

import { Item } from '../../core';

@Component({
  selector: 'item-display-card',
  templateUrl: './item-display-card.component.html',
  styleUrls: ['./item-display-card.component.scss']
})
export class ItemDisplayCardComponent {

  @Input() item: Item;

  public navigateToActionLink(): void {
    window.open(this.item.actionUrl);
  }

  get dateString(): string {
    let result = '';
    if ( this.item.endDate && this.item.startDate ) {
      result = '( ' + this.item.startDate + ' - ' + this.item.endDate + '  )';
    } else if ( this.item.startDate ) {
      result = '( ' + this.item.startDate + ' - Present )';
    }
    return result;
  }
}
