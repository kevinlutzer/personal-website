import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertService } from '../../core';
import { VisitorOptions, Visitor } from './visitor.model';
import { VisitorService } from './visitor.service';

@Component({
  selector: 'visitor-dialog',
  templateUrl: 'visitor-dialog.component.html',
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
  @Output() responseVisitor: EventEmitter<Visitor> = new EventEmitter();

  onSubmitClick(): void {
    const visitor = this.visitorFormGroup.get('visitorSelectFormControl').value;
    this.responseVisitor.emit(visitor);
  }

  ngOnInit(): void {
    this.visitorFormGroup = new FormGroup({'visitorSelectFormControl': new FormControl('', [Validators.required])});
    this.responseVisitor.emit(null);
  }
}
