import { Component, Input, OnInit } from '@angular/core';

import { Alert } from './alert';

@Component({
   selector: 'alert-snackbar',
   templateUrl: 'alert.component.html',
   styleUrls: ['alert.component.scss']
})

export class AlertComponent {
    @Input() alert: Alert = {
        message: 'yas',
        action: 'Success'
    };

    ngOnInit() {
        console.log(alert);
    }
}
