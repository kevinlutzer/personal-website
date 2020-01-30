import { Component, OnInit } from '@angular/core';
import { Status, StatusService, TelemetryService } from '../room-environment-monitor';
import { Observable } from 'rxjs';

@Component({
  selector: 'project-sample',
  templateUrl: './project-sample.component.html',
  styleUrls: ['./project-sample.component.scss']
})
export class ProjectSampleComponent implements OnInit{
    constructor(
        private statusService: StatusService,
        private telemetryService: TelemetryService,
    ) {}

    statuses$: Observable<Status[]>

    ngOnInit(): void {
       this.statuses$ = this.statusService.getAllStatus();
       this.statuses$.subscribe(console.log);
       this.telemetryService.get('room-environment-monitor-basement').subscribe(console.log);
    }

    lastActiveDate(status: Status): string {
        if (isNaN(status.lastActive.getTime())) {  
            return '';
        }
        return `${status.lastActive.getDay()}/${status.lastActive.getMonth()}/${status.lastActive.getFullYear()}`;
    }
}
