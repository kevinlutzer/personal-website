import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorOptions, Visitor } from './visitor.model';

@Component({
  selector: 'visitor-dialog',
  templateUrl: './visitor-dialog.component.html',
  styles: [`
    .mat-form-field {
      width: 60%;
    }

    .mat-field-content-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .submit-button-container {
      display: flex; 
      justify-content: flex-end;
    }
  `]
})
export class VisitorDialogComponent implements OnInit {

  public visitorOptions = VisitorOptions;
  public visitorFormGroup: FormGroup;
  public visitorSubmitted$$: EventEmitter<Visitor> = new EventEmitter();

  onSubmitClick(): void {
    const visitorType = this.visitorFormGroup.get('visitorSelectFormControl').value;
    this.visitorSubmitted$$.emit(Visitor.fromVisitorType(visitorType));
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }
}
