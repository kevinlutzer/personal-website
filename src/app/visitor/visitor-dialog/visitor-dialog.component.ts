import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { VisitorOptions, VisitorService, Visitor } from '../shared';

@Component({
  selector: 'visitor-dialog',
  templateUrl: 'visitor-dialog.component.html',
  styleUrls: ['visitor-dialog.component.css']
})
export class VisitorDialogComponent {

  public visitorOptions = VisitorOptions;
  public visitor: string;

  constructor(
    public dialogRef: MdDialogRef<VisitorDialogComponent>,
    private visitorService: VisitorService
  ) { }

  onSubmitClick(): void {
    this.visitorService.put({
      ipAddress: '192.168.0.1',
      type: this.visitor
    } as Visitor);
    this.dialogRef.close();
  }
}
