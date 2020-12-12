import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/Appointments.model';
import { AppointmentServices } from '../services/Appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appointment_list: Appointment[] = [];
  constructor(private appointment_service:AppointmentServices) { }


  ngOnInit(): void {
    this.appointment_list = this.appointment_service.get_all_appointments();
    console.log(this.appointment_list);
  }

  search_function(preference : any) {
    console.log(preference);
    this.appointment_list = this.appointment_service.get_all_appointments();
    if(preference) {

      this.appointment_list = this.appointment_list.filter(appoint => appoint.trainerpreference === preference);
    }
  }

}
