import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactApiService {
    constructor(
        private http: Http
    ){}

    public putContact(): Observable<any> {
        return null;
    } 
}