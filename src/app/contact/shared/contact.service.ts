import { Injectable } from '@angular/core';
import { ContactApiService } from './contact.api.service';

@Injectable()
export class ContactService {

    constructor(
        private contactApiService: ContactApiService,
    ){}

    public put(): void {}

}
