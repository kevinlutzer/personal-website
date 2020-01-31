import { Component, OnInit } from '@angular/core';
import { Status, StatusService, TelemetryService, Telemetry } from './room-environment-monitor';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

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

    statuses$: Observable<Status[]>;
    telemetry$: Observable<Map<string, Telemetry>>;

    ngOnInit(): void {
       this.statuses$ = this.statusService.getAllStatus().pipe(
           startWith([new Status(), new Status(), new Status()])
       )

       this.telemetry$ = this.statuses$.pipe(
           switchMap((s: Status[]) => {
               const ids = (s || []).map((s: Status) => s.deviceId)
               return this.telemetryService.getMulti(ids)
           })
       );

       this.telemetry$.subscribe(console.log);
       
    }

    lastActiveDate(status: Status): string {
        if (isNaN(status.lastActive.getTime())) {  
            return '';
        }
        return `${status.lastActive.getDay()}/${status.lastActive.getMonth()}/${status.lastActive.getFullYear()}`;
    }
}
