import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/Appointments.model';
import { AppointmentServices } from '../services/Appointment.service';

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html',
  styleUrls: ['./place-fitness-trainer-appointment.component.css']
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  amt:number = 0;
  submitted = false;
  appointmentForm: FormGroup;
  appointment: Appointment;
  anyError = false;
  toggl = false;

  constructor(private fb: FormBuilder, private appointment_services: AppointmentServices) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: [""],
      email: ["", [Validators.required,Validators.email]],
      address: ["", [Validators.required]],
      phonenumber: ["", [Validators.required,Validators.min(999999999), Validators.max(9999999999)]],
      pincode: ["", [Validators.required,Validators.min(99999),Validators.max(999999)]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      country: ["", [Validators.required]],
      
      age: ["", [Validators.required, Validators.pattern("[0-9]+"), Validators.min(18), Validators.max(60)]],

      psysiotherapy: ["Yes", [Validators.required]],
      packages: [, [Validators.required]],
      amount: [""],
      trainerpreference: ["Male trainer", [Validators.required]]
    });
  }
  show() {
    this.toggl=true;
  }

  hide_input() {
    this.toggl = false;
  }
  onSubmit() {
    this.submitted = true;
    console.log("submitted");
    if(this.appointmentForm.invalid){
      console.log("error");
      this.anyError = true;
    }else{
      this.anyError = false;
      console.log(JSON.stringify(this.appointmentForm.value,null,4))
      this.appointment = this.appointmentForm.value;
      this.appointment_services.add_appointment(this.appointment);
      alert("Appointment Submitted Successfuly");
      this.appointmentForm.reset;
    }
  }

}
