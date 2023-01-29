import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormData } from '../form-data';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  submitted: boolean;

  constructor(public route: Router, private sharedDataService:SharedDataService) { }

  ngOnInit() { }

  onSubmit(formData:FormData) {
    console.table(formData)
    this.sharedDataService.setData(formData);
    this.route.navigate(['/confirmation']);
  }
}
