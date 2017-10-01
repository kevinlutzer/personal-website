import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact.model';

@Injectable()
export class ContactApiService {

    public putContact(contact: Contact): Observable<any> {
        return Observable.of({ success: true});
    }
}
