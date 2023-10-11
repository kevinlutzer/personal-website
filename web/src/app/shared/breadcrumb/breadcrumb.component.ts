import { Component, Input } from '@angular/core';

export interface BreadCrumb {
  name: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: BreadCrumb[] = [];
}
