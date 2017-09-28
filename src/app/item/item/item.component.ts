import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import { Item } from '../shared/item.model';

export type SeeMoreButtonText = 'See More!' | 'Hide';

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})

export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() height: string;

  contentButtonText: SeeMoreButtonText = 'See More!';
  showContent = false;

  constructor(
    private sanitizer: DomSanitizer,
    private registry: MdIconRegistry
  ) { }

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

  ngOnInit() {
    if ( this.item.iconUrl ) {
      this.registry.addSvgIcon('action-icon', this.sanitizer.bypassSecurityTrustResourceUrl(this.item.iconUrl));
    }
  }
}
