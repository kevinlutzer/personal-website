import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorOptions, VisitorType } from './visitor.interface';
import { Observable, Subscription } from 'rxjs';

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

    mat-form-field {
      width: 100%;
    }
  `]
})
export class VisitorDialogComponent {

  public visitorOptions = VisitorOptions;
  public visitorFormGroup: FormGroup;

  @Output() visitorSubmitted$$: EventEmitter<VisitorType> = new EventEmitter();
  @Input() loading: boolean = false;
  
  constructor() {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
  }

  onSubmitClick(): void {
    const visitorType = this.visitorFormGroup.get('visitorSelectFormControl')?.value;
    this.visitorSubmitted$$.emit(visitorType);
  }

  public resetForm(): void {
    this.visitorFormGroup.reset();
  }
}
