import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact.model';

import 'rxjs/add/observable/of';

@Injectable()
export class ContactStubService {
    public putContact(contact: Contact): Observable<any> {
        return Observable.of({ success: true});
    }
}
