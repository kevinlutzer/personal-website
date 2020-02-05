import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TelemetryService {
    constructor(
        private http: HttpClient,
        @Inject('IOT-DEVICE-GCF-HOST') private host: string
    ) {}
}
