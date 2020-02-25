import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorOptions, Visitor } from './visitor.model';
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
  `]
})
export class VisitorDialogComponent implements OnInit, OnDestroy {

  public visitorOptions = VisitorOptions;
  public visitorFormGroup: FormGroup;
  private subscription: Subscription;

  @Output() visitorSubmitted$$: EventEmitter<Visitor> = new EventEmitter();
  @Input() loading: boolean;
  @Input() resetForm$: Observable<void>;

  onSubmitClick(): void {
    const visitorType = this.visitorFormGroup.get('visitorSelectFormControl').value;
    this.visitorSubmitted$$.emit(Visitor.fromVisitorType(visitorType));
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
    this.resetForm$.subscribe(_ => this.visitorFormGroup.reset());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
