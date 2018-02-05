import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../core';
import { VisitorOptions, VisitorType, Visitor } from '../core/visitor.model';
import { VisitorService } from '../core/visitor.service';

@Component({
  selector: 'visitor-dialog',
  templateUrl: 'visitor-dialog.component.html',
  styleUrls: ['visitor-dialog.component.scss']
})
export class VisitorDialogComponent implements OnInit {

  public visitorOptions = VisitorOptions;
  public visitorFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VisitorDialogComponent>,
    private visitorService: VisitorService,
    private alertService: AlertService
  ) { }

  onSubmitClick(): void {
    let visitor = this.visitorFormGroup.get('visitorSelectFormControl').value
    this.visitorService
      .put({
        ipAddress: '0.0.0.0',
        type: visitor
      } as Visitor)
      .subscribe();

    this.alertService.throwSuccessSnack('Thanks for submitting!');
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }
}
