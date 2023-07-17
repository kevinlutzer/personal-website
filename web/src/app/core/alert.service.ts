import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  throwSuccessSnack(msg: string) {
    this.snackBar.open(msg, 'Success', this.getSnackBarConfig());
  }

  throwErrorSnack(msg: string) {
    console.log(msg);
    this.snackBar.open(msg, '', this.getSnackBarConfig());
  }

  getSnackBarConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.direction = 'ltr';
    config.duration = 2000;
    return config;
  }
}
