import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private actIndicDate!: Date;

  constructor() { }

  set setActIndicDate(value: Date){
    this.actIndicDate = value
  }

  get getActIndicDate(): Date {
    return this.actIndicDate
  }


}
