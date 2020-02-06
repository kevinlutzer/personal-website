import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ListDeviceApiResponse } from './device.interface';
import { map, take, startWith, delay } from 'rxjs/operators';
import { Device, DeviceApiInterface } from './device.interface';

@Injectable()
export class DeviceService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    private devices$$: BehaviorSubject<Device[]> = new BehaviorSubject([
        {lastTelemetry: {}} as Device,
        {lastTelemetry: {}} as Device
    ]); 
    private loading$$: BehaviorSubject<boolean> =  new BehaviorSubject(true);

    get loading$(): Observable<boolean> {
        return this.loading$$.asObservable();
    }

    get devices$(): Observable<Device[]> {
        return this.devices$$.asObservable();
    }

    getAllDevice(): void {
        this.loading$$.next(true);
        this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/device/list`).pipe(
            take(1),
            map((resp: ListDeviceApiResponse) => (resp || {devices: []}).devices),
            map((data: DeviceApiInterface[]) => data.map(Device.fromApi)),
        ).subscribe(
            (devices: Device[]) => {
                this.loading$$.next(false);
                this.devices$$.next(devices);
            }
        )
    }
}
