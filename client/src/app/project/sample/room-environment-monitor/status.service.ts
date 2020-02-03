import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status, ListStatusApiResponse, StatusApiInterface } from './status.interface';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class StatusService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}
 
    getAllStatus(): Observable<Status[]> {
        return this.http.get(`https://${this.host}/RoomEnvironmentMonitor/api/status/list`).pipe(
            map((resp: ListStatusApiResponse) => (resp || {data: []}).data),
            map((data: StatusApiInterface[]) => data.map(Status.fromApi)),
            shareReplay(1)
        )
    }
}
