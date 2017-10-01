import { Injectable } from '@angular/core';
import { ContactApiService } from './contact.api.service';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {

    constructor(
        private contactApiService: ContactApiService,
    ) {}

    public put(contact: Contact): void {
        this.contactApiService.putContact(contact);
    }

}
