import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Party } from '../interfaces/Party.interface';
import { DeviceTyActivity } from '../interfaces/DeviceTyActivity.interface';
import { DeviceTicket } from '../interfaces/DeviceTicket.interface';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  //? Importacion de http
  private http = inject( HttpClient );

  //? Url Base, (TODO modficacion para trabajar en microservicios)
  private readonly urlBase: string = "http://localhost:8080/api/plantillas";


  private actIndicDate!: Date;

  constructor() { }

  set setActIndicDate(value: Date){
    this.actIndicDate = value
  }

  get getActIndicDate(): Date {
    return this.actIndicDate
  }

 //! Metodo para traer las partidas
getParties():Observable<Party[]>{
  const url: string = `${this.urlBase}/partidas`;
  return this.http.get<Party[]>(url);
}

//! Metodo para traer los dispositivos por partida seleccionada
getDevicesForParty(party: string): Observable<string[]>{
  const body: Party = {party_number: party};
  const url: string = `${this.urlBase}/devices`;
  return this.http.post<string[]>(url, body)
}

//! Metodo para obtener los tipos de actividades (TODO: Obtener los tipos de actividades segun el dispositivo seleccionado, para evitar plantillas sin ese tipo de actividad)
getActivityTypes(): Observable<string[]>{
  const url: string = `${this.urlBase}/activity_types`;
  return this.http.get<string[]>(url);
}

//! Metodo para obtener las descripciones de los tickets
getTicketDescriptions(deviceTyActivity: DeviceTyActivity): Observable<string[]>{
  const body: DeviceTyActivity = deviceTyActivity;
  const url: string = `${this.urlBase}/ticket_description`;
  return this.http.post<string[]>(url,body);
}

//! Metodo para obtener las descripciones por tecnico
getTechDescriptions(deviceTicket: DeviceTicket): Observable<string[]>{
  const body: DeviceTicket = deviceTicket;
  const url:string = `${this.urlBase}/tech_description`;
  return this.http.post<string[]>(url, body);
}



}
