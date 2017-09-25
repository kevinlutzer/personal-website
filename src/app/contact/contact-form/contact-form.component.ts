import { Component } from '@angular/core';

import { Contact } from '../shared/contact.model';

@Component({
    templateUrl: 'contact-form.component.html',
    selector: 'contact-form'
})

export class ContactFormComponent {

    public contact = new Contact();

    public onSubmit(): void {
        console.log(this.contact);
    }
}