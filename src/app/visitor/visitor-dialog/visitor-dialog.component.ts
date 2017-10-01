import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AlertService } from '../../core';
import { VisitorOptions, VisitorType, Visitor } from '../shared/visitor.model';
import { VisitorService } from '../shared/visitor.service';

@Component({
  selector: 'visitor-dialog',
  templateUrl: 'visitor-dialog.component.html'
})
export class VisitorDialogComponent {

  public visitorOptions = VisitorOptions;
  public visitor: string;
  public selectedVisitor: VisitorType = 'Other';

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

  
}
