import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormData } from '../form-data';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  data:FormData

  constructor(private sharedDataService: SharedDataService, private route:Router ){}

  ngOnInit(): void {
    this.data = this.sharedDataService.getData();
    console.log(this.data)
  }

  mockAppointmentSubmission(){
    this.route.navigate(['/datepicker']);

  }
}

  



