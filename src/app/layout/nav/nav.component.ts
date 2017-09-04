import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry } from '@angular/material';

const pageUrls = ['overview', 'projects', 'portfolio', 'about'];

export interface PageMap { [pageName: string]: string; }

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pageUrls = pageUrls;

  constructor(
    private router: Router
  ) { }

  public routeToPage(url: string): void {
    this.router.navigate([url]);
  }

  public capitalizeFirstLetter(lowerCaseString: string): string {
    return lowerCaseString[0].toUpperCase() + lowerCaseString.slice(1, lowerCaseString.length);
  }

  ngOnInit() {}

}
