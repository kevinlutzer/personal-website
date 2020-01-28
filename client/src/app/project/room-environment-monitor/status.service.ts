import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status.interface';
import { mapTo, tap } from 'rxjs/operators';

@Injectable()
export class StatusService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}

    getAllStatus(): Observable<Status[]> {
        return this.http.get(`${this.host}/RoomEnvironmentMonitor/api/status/list`).pipe(
            tap(console.log),
            mapTo(null)
        )
    }
}
