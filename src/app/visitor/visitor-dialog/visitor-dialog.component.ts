import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

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
    public dialogRef: MdDialogRef<VisitorDialogComponent>,
    private visitorService: VisitorService,
    private alertService: AlertService
  ) { }

  onSubmitClick(): void {
    this.visitorService.put({
      ipAddress: '192.168.0.1',
      type: this.selectedVisitor
    } as Visitor);
    this.alertService.throwSuccessSnack('Thanks for submitting!');
    this.dialogRef.close();
  }
}
