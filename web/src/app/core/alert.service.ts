import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

type SnackClass = 'error-snack' | 'success-snack'

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  throwSuccessSnack(msg: string) {
    this.snackBar.open(msg, 'Success', this.getSnackBarConfig('success-snack'));
  }

  throwErrorSnack(msg: string) {
    console.error(msg);
    this.snackBar.open(msg, 'Error', this.getSnackBarConfig('error-snack'));
  }

  getSnackBarConfig(c: SnackClass): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.direction = 'ltr';
    config.duration = 100000;
    config.panelClass = [c];
    return config;
  }
}
