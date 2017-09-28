import { Injectable } from '@angular/core';
import { ContactApiService } from './contact.api.service';

@Injectable()
export class ContactService {

    constructor(
        private contactStub: ContactApiService,
    ){}

    public put(): void {}

}
