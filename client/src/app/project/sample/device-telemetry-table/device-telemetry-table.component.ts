import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../room-environment-monitor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ELEMENT_DATA: any[] = [
    {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'},
    {name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {name: 'Boron', weight: 10.811, symbol: 'B'},
    {name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {name: 'Nitrogen', weight: 14.0067, symbol: 'N'}
  ];

interface tableDataInterface {
    id: string;
    cpuTemp: number;
    roomTemp: number;
    co2: number;
    timestamp: string;
}


@Component({
    selector: 'device-telemetry-table',
    templateUrl: './device-telemetry-table.component.html',
})  
export class DeviceTelemetryTable implements OnInit {
    displayedColumns = ['id', 'cpuTemp', 'roomTemp', 'co2', 'timestamp'];
    dataSource: Observable<tableDataInterface[]>;

    constructor(private telemetryService: TelemetryService) {}

    ngOnInit(): void {
        this.dataSource = this.telemetryService.list().pipe(
            map(tes => tes.map(te => ({
                    id: te.deviceId,
                    cpuTemp: te.cpuTemp,
                    roomTemp: te.roomTemp,
                    co2: te.co2,
                    timestamp: te.timestamp.toLocaleString()
                })
            ))
        )

        this.dataSource.subscribe(console.log);
    }
}
