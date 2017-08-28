import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { AlertComponent } from './alert.component';

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MdSnackBar
  ) { }

  throwSuccessSnack(msg: string) {
    const alertComp = new AlertComponent();
    alertComp.alert = {
      action: 'Success',
      message: 'Tiny Rick'
    };
    this.snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      direction: 'rtl'
    });
  }

  throwErrorSnack(msg: string) {
    const alertComp = new AlertComponent();
    alertComp.alert = {
      action: 'Failure',
      message: 'Tiny Rick'
    };
    this.snackBar.openFromComponent(AlertComponent, {
      duration: 2000,
      direction: 'rtl'
    });
  }
}
