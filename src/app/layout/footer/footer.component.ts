import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kl-footer',
  template: `
    <footer>
      <kl-social-media></kl-social-media>
      <p class="footer-text"> Copy Rights Kevin Lutzer. All Rights Reserved </p>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
