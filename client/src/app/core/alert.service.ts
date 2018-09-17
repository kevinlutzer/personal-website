import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  throwSuccessSnack(msg: string) {
    this.snackBar.open(msg, 'Success', this.getSnackBarConfig('alert-success'));
  }

  throwErrorSnack(msg: string) {
    this.snackBar.open(msg, 'Failure', this.getSnackBarConfig('alert-error'));
  }

  getSnackBarConfig(colorClass: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    // config.extraClasses = ['alert-snack-container', colorClass];
    config.direction = 'ltr';
    config.duration = 2000;
    return config;
  }
}
