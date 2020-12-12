import { Appointment } from '../models/Appointments.model';
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact.model';

@Injectable({
    providedIn: 'root'
})

export class AppointmentServices {
    constructor() { }
    appointments_array: Appointment[] = [];
    contact_array: Contact[] = [];
    add_appointment(appointment:Appointment) {
        if(localStorage.getItem('appointment_array'))
        {
            this.appointments_array = JSON.parse(localStorage.getItem('appointment_array'))
            this.appointments_array.push(appointment);
            localStorage.setItem('appointment_array', JSON.stringify(this.appointments_array));
        }else{
            this.appointments_array.push(appointment);
            localStorage.setItem('appointment_array', JSON.stringify(this.appointments_array));
        }
        console.log("Successfully added to appointments array");
    }
    
    get_all_appointments() {
        return  JSON.parse(localStorage.getItem('appointment_array'));
    }

    add_contact(contact:Contact) {
        if(localStorage.getItem('contact_array'))
        {
            this.appointments_array = JSON.parse(localStorage.getItem('contact_array'))
            this.contact_array.push(contact);
            localStorage.setItem('contact_array', JSON.stringify(this.contact_array));
        }else{
            this.contact_array.push(contact);
            localStorage.setItem('contact_array', JSON.stringify(this.contact_array));
        }
        console.log("Successfully added to contact array");
    }

    get_all_contacts() {
        return this.contact_array;
    }
}
