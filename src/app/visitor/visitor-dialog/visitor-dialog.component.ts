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
  public visitor: string;
  public selectedVisitor: VisitorType = 'Other';
  public visitorFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VisitorDialogComponent>,
    private visitorService: VisitorService,
    private alertService: AlertService
  ) { }

  onSubmitClick(): void {
    this.visitorService
      .put({
        ipAddress: '0.0.0.0',
        type: this.selectedVisitor
      } as Visitor)
      .subscribe();

    this.alertService.throwSuccessSnack('Thanks for submitting!');
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }
}
