import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorOptions, Visitor } from './visitor.model';

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
  public visitorSubmitted$$: EventEmitter<Visitor> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<VisitorDialogComponent>
  ) { }

  onSubmitClick(): void {
    const visitorType = this.visitorFormGroup.get('visitorSelectFormControl').value;
    this.visitorSubmitted$$.emit(Visitor.fromVisitorType(visitorType));
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }
}
