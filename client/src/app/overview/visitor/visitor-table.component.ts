import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Visitor } from './visitor.model';

@Component({
  selector: 'visitor-table',
  templateUrl: './visitor-table.component.html',
  styles: []
})
export class VisitorTableComponent implements AfterViewInit {
    private _visitors: Visitor[];
    public dataSource = new MatTableDataSource();
    public displayedColumns = [
        'type', 'location'
    ]

    @ViewChild('mat-paginator') private paginator: MatPaginator;
    @Input() set visitors(value: Visitor[]) {
        this.dataSource.data = value;
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
    
}
