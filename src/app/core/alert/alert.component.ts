import { Component, Input, OnInit } from '@angular/core';

import { Alert } from './alert';

@Component({
   selector: 'alert-snackbar',
   templateUrl: 'alert.component.html',
   styleUrls: ['alert.component.scss']
})

export class AlertComponent {

    alert: Alert = null;
    temp: Alert = null;
    constructor() {}

    get alertActionColor() {
        return this.alert.action === 'Success' ? true : false;
    }

    ngOnInit() {
        console.log(this.alert);
    }
}
