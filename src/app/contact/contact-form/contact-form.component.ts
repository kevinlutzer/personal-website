import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Contact } from '../shared/contact.model';

@Component({
    templateUrl: 'contact-form.component.html',
    selector: 'contact-form'
})

export class ContactFormComponent {

    public contact: Contact = new Contact();
    public emailFormControl: FormControl = new FormControl('', [
        Validators.email]);

    public onSubmit(): void {
        console.log(this.contact);
    }
}