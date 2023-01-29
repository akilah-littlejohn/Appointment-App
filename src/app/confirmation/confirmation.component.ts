import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormData } from '../form-data';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  data:FormData

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.data = this.sharedDataService.getData();
    console.log(this.data)
  }
}

  



