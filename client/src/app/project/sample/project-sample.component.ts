import { Component, OnInit } from '@angular/core';
import { DeviceStatusCardDataInterface } from './room-environment-monitor'; 
import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { DeviceService } from './room-environment-monitor/device.service';
import { Device } from './room-environment-monitor/device.interface';

@Component({
  selector: 'project-sample',
  templateUrl: './project-sample.component.html',
  styleUrls: ['./project-sample.component.scss']
})
export class ProjectSampleComponent implements OnInit{
    constructor(
        private deviceService: DeviceService,
    ) {}

    cardData$: Observable<DeviceStatusCardDataInterface[]>;

    ngOnInit(): void {
        this.deviceService
            .getAllDevice()

        this.cardData$ = this.deviceService.devices$
            .pipe(
                map((ds: Device[]) => (ds || []).map(d => {
                    return {
                        name: d.name,
                        roomDescription: d.description,
                        lastActive: d.lastActivity,
                        cpuTemp: d.lastTelemetry.cpuTemp,
                        lux: d.lastTelemetry.lux,
                        co2: d.lastTelemetry.co2,
                        tvoc: d.lastTelemetry.tvoc,
                        roomTemp: d.lastTelemetry.roomTemp,
                        pressure: d.lastTelemetry.pressure,
                        humidity: d.lastTelemetry.humidity,
                    } as DeviceStatusCardDataInterface
                }),
            )
       );
    }

    getLoading$(): Observable<boolean> {
        return this.deviceService.loading$;
    }

    lastActiveDate(cd: DeviceStatusCardDataInterface): string {
        if (isNaN(cd.lastActive.getTime())) {  
            return '';
        }
        return `${cd.lastActive.getDay()}/${cd.lastActive.getMonth()}/${cd.lastActive.getFullYear()}`;
    }
}
