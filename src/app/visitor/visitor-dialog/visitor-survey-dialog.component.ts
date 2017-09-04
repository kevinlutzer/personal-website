import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { VisitorOptions } from '../../core';

@Component({
  selector: 'visitor-survey-dialog',
  templateUrl: 'visitor-survey-dialog.component.html',
  styleUrls: ['visitor-survey-dialog.component.css']
})
export class VisitorSurveyDialogComponent {

  visitorOptions = VisitorOptions;

  constructor(
    public dialogRef: MdDialogRef<VisitorSurveyDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
