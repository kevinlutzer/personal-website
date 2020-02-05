import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListDeviceApiResponse } from './device.interface';
import { map, shareReplay } from 'rxjs/operators';
import { Device, DeviceApiInterface } from './device.interface';

@Injectable()
export class DeviceService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}
 
    getAllDevice(): Observable<Device[]> {
        return this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/device/list`).pipe(
            map((resp: ListDeviceApiResponse) => (resp || {devices: []}).devices),
            map((data: DeviceApiInterface[]) => data.map(Device.fromApi)),
            shareReplay(1)
        )
    }
}
