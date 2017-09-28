import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AlertService } from '../../core'

import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
    templateUrl: 'contact-form.component.html',
    selector: 'contact-form'
})

export class ContactFormComponent {

    constructor(
        private alertService: AlertService,
        private contactService: ContactService
    ){}

    public contactFormControl: FormControl;
    public contact: Contact = new Contact();
    public emailFormControl: FormControl = new FormControl('', [
        Validators.email]);

    public onSubmit(): void {
        
        this.alertService.throwSuccessSnack("Thank you!");
        this.contactService.put(this.contact);
    }
}