import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Contact } from '../models/Contact.model';
import { AppointmentServices } from '../services/Appointment.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  public obj: any = {};
  anyError = false;
  contact: Contact;
  constructor(private fb: FormBuilder, private appointment_Service: AppointmentServices) { }


  ngOnInit() {
    this.contactForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: [""],
      phonenumber: ["", [Validators.required]],
      email: ["", [Validators.required,Validators.email]],
      message:[""]
    });
  }

  onSubmit() {
    
    if (this.contactForm.valid) {
      this.contact = this.contactForm.value;
      this.appointment_Service.add_contact(this.contact);
      this.anyError = false;
      alert("Contact Information Registered");
    }
    else {
      this.anyError = true;
    }
  }
}
