import { Component, OnInit } from '@angular/core';
import { StatusService } from '../room-environment-monitor/status.service';

@Component({
  selector: 'project-sample',
  templateUrl: './project-sample.component.html'
})
export class ProjectSampleComponent implements OnInit {
    constructor(
        private statusService: StatusService
    ) {}

    ngOnInit(): void {
        this.statusService.getAllStatus().subscribe(console.log);
    }
}
