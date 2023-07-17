import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Visitor } from './visitor.interface';

@Component({
  selector: 'visitor-table',
  templateUrl: './visitor-table.component.html'
})
export class VisitorTableComponent implements AfterViewInit {
    public dataSource = new MatTableDataSource();
    public displayedColumns = [
        'type', 'location'
    ]

    @ViewChild('mat-paginator', {static: false}) private paginator: MatPaginator;
    @Input() set visitors(value: Visitor[]) {
        this.dataSource.data = value;
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }
    
}
