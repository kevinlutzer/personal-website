import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { VisitorOptions } from '../shared';

@Component({
  selector: 'visitor-dialog',
  templateUrl: 'visitor-dialog.component.html',
  styleUrls: ['visitor-dialog.component.css']
})
export class VisitorDialogComponent {

  visitorOptions = VisitorOptions;

  constructor(
    public dialogRef: MdDialogRef<VisitorDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
