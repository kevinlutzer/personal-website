import { Component, Input } from '@angular/core';

import { Item } from '../shared';

export type SeeMoreButtonText = 'See More!' | 'Hide';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})


export class ItemComponent {

  @Input() item: Item;
  contentButtonText: SeeMoreButtonText = 'See More!';
  showContent = false;

  public navigateToActionLink(): void {
    window.open(this.item.actionUrl);
  }

  public onShowContent() {
    this.contentButtonText = this.contentButtonText === 'See More!' ? 'Hide' : 'See More!';
    this.showContent = !this.showContent;
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
