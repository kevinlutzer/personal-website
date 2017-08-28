import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { AlertComponent } from './alert.component';

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MdSnackBar
  ) { }

  throwSuccessSnack(msg: string) {
    this.snackBar.open(msg, 'Success', this.getSnackBarConfig('alert-success'));
  }

  throwErrorSnack(msg: string) {
    this.snackBar.open(msg, 'Failure', this.getSnackBarConfig('alert-error'));
  }

  getSnackBarConfig(colorClass: string): MdSnackBarConfig {
    const config = new MdSnackBarConfig();
    config.extraClasses = ['alert-snack-container', colorClass];
    config.direction = 'ltr';
    config.duration = 1000000;
    return config;
  }
}
