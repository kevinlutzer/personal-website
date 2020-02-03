import { Component, OnInit } from '@angular/core';
import { Status, StatusService, TelemetryService, Telemetry } from './room-environment-monitor';
import { DeviceStatusCardDataInterface } from './device-status-card/device-status-card.component'; 
import { Observable, combineLatest } from 'rxjs';
import { switchMap, startWith, map } from 'rxjs/operators';

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

    cardData$: Observable<DeviceStatusCardDataInterface[]>;

    ngOnInit(): void {
       const statuses$ = this.statusService.getAllStatus().pipe(
           startWith([new Status(), new Status(), new Status()])
       )

        const telemetry$ = statuses$.pipe(
           switchMap((s: Status[]) => {
               const ids = (s || []).map((s: Status) => s.deviceId)
               return this.telemetryService.getMulti(ids)
           }),
       );

       this.cardData$ = combineLatest([telemetry$, statuses$]).pipe(
           map(([tm, ss]) => (ss || []).map((s: Status) => {
               const t = tm.get(s.deviceId) || new Telemetry();
               return {
                name: s.name,
                roomDescription: s.roomDescription,
                lastActive: s.lastActive,
                cpuTemp: s.cpuTemp,
                lux: t.lux,
                co2: t.co2,
                tvoc: t.tvoc,
                roomTemp: t.roomTemp,
                pressure: t.pressure,
                humidity: t.humidity,
               } as DeviceStatusCardDataInterface
           }))
       );
    }

    lastActiveDate(status: Status): string {
        if (isNaN(status.lastActive.getTime())) {  
            return '';
        }
        return `${status.lastActive.getDay()}/${status.lastActive.getMonth()}/${status.lastActive.getFullYear()}`;
    }
}
