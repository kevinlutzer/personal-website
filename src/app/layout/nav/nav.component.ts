import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { MdIconRegistry } from '@angular/material';

const pageUrls = ['overview', 'projects', 'portfolio', 'about'];

export interface PageMap { [pageName: string]: string; }

@Component({
  selector: 'kl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  /* Get routes without Redirects */
  get routes(): Route[] {
    return this.router.config.filter(route => route.component );
  }

  ngOnInit() {
    this.router.events.subscribe(event => console.log(event));
    console.log(this.routes);
  }

}
