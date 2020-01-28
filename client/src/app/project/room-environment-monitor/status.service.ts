import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Status, ListStatusApiResponse, StatusApiInterface } from './status.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class StatusService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    getAllStatus(): Observable<Status[]> {
        // return this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/status/list`).pipe(
        //     map((resp: ListStatusApiResponse) => (resp || {data: []}).data),
        //     map((data: StatusApiInterface[]) => data.map(Status.fromApi)) 
        // )
        const data = [
                {
                    name: "Basment Monitor",
                    roomDescription: "Basement, my current 'workshop'",
                    cpuTemp: 34.7,
                    lastActive: "2020-01-22T05:05:59.460Z",
                    deviceId: "room-environment-monitor-basement"
                },
                {
                    name: "Kevin's Bedroom Monitor",
                    roomDescription: "My room, primarily where I sleep",
                    cpuTemp: 43.9,
                    lastActive: "2019-02-07T04:05:01.473Z",
                    deviceId: "room-environment-monitor-personal"
                },
                {
                    name: "Guest Bedroom Monitor",
                    roomDescription: "Room used for control. No activity usually",
                    cpuTemp: 42.8,
                    lastActive: "",
                    deviceId: "room-environment-monitor-personal"
                },
                {
                    name: "Prototyping Device",
                    cpuTemp: 45.6,
                    lastActive: "",
                    deviceId: "test-device"
                }
            ] as StatusApiInterface[];

        return of(data.map(Status.fromApi))
    }
}
