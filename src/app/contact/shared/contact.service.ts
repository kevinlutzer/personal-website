import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    constructor(
        private contactApiService: ContactApiService,
    ){}

    public put(): void {}

}
