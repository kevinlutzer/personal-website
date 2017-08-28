import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { AlertComponent } from './alert.component';

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MdSnackBar
  ) { }

  showSuccessSnack(msg: string) {
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

  showErrorSnack(msg: string) {
    this.snackBar.open(msg, 'Error!', {
      duration: 2000,
      direction: 'rtl'
    });
  }

}
