import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../core';
import { VisitorOptions, VisitorType, Visitor } from './core/visitor.model';
import { VisitorService } from './core/visitor.service';

@Component({
  selector: 'visitor-dialog',
  template: `
    <h1>Who are you?</h1> 
    <form (ngSubmit)="onSubmitClick()" [formGroup]="visitorFormGroup">
        <div [formGroup]="visitorFormGroup">
        <mat-form-field>
            <mat-select formControlName="visitorSelectFormControl" placeholder="type" name="visitorType">
                <mat-option *ngFor="let visitor of visitorOptions" [value]="visitor">
                    {{visitor}}
                </mat-option>
            </mat-select>
            <mat-error *ngIf="!visitorFormGroup.get('visitorSelectFormControl').valid">This field is required</mat-error> 
        </mat-form-field>
        </div>
        <button color="primary" mat-raised-button> Submit </button>
    </form>   
  `,
  styles: [`
    button {
      margin-top: 16px;
    }

    .mat-form-field {
      width: 60%;
    }
  `]
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
    const visitor = this.visitorFormGroup.get('visitorSelectFormControl').value;
    this.visitorService
      .put({
        ipAddress: '0.0.0.0',
        type: visitor
      } as Visitor)
      .subscribe(() => {
        this.alertService.throwSuccessSnack('Thanks for submitting!');
        this.dialogRef.close();
        this.visitorService.loadMore();
      })
    
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }
}
