import { Injectable } from '@angular/core';
import { FormData } from './form-data';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private data: FormData;

  constructor() { }

  setData(formData: FormData) {
    this.data = formData;
  }

  getData(): FormData {
    return this.data;
  }

}

