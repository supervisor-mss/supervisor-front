import { Component, OnInit } from '@angular/core';
import { Party } from '../../interfaces/Party.interface';
import { IndicadoresService } from '../../services/indicadores.service';
import { DeviceTyActivity } from '../../interfaces/DeviceTyActivity.interface';
import { DeviceTicket } from '../../interfaces/DeviceTicket.interface';

@Component({
  selector: 'indicadores-form-no-planificado',
  templateUrl: './form-no-planificado.component.html',
  styleUrl: './form-no-planificado.component.css'
})
export class FormNoPlanificadoComponent implements OnInit{



  parties: Party[] = [];
  devices: string[] = [];
  activity_types: string[] = [];
  ticket_descriptions: string[] = [];
  tech_descriptions: string[] =[];


  selectedParty: string = "";
  selectedDevice: string = "";
  selectedActivityType: string = "";
  selectedTicketDescription: string = "";
  selectedTechDescription: string ="";

  constructor(
    private indicadoresService: IndicadoresService
  ){}

  ngOnInit(): void {
    this.getAllParties();
  }

  getAllParties(){
    this.indicadoresService.getParties().subscribe(data => {
      this.parties = data;
      if(this.parties.length === 0) return
      this.selectedParty = this.parties[0].party_number;
      this.getDevices(this.selectedParty);
    });
  }

  getDevices(party: string){
    this.indicadoresService.getDevicesForParty(party).subscribe(data => {
      this.devices = data;
      if(this.devices.length === 0) return
      this.selectedDevice = this.devices[0];
      this.getActivityTypes();
    });
  }

  getActivityTypes(){
    this.activity_types = [];
    this.indicadoresService.getActivityTypes().subscribe(data => {
      this.activity_types = data;
      if(this.activity_types.length === 0) return
      this.selectedActivityType = this.activity_types[0]
      this.getTicketDescriptions(this.selectedDevice, this.selectedActivityType)
    })
  }

  getTicketDescriptions(device: string, activity_type: string){
    let devTyAct: DeviceTyActivity = {device, activity_type}
    this.indicadoresService.getTicketDescriptions(devTyAct).subscribe(data => {
      this.ticket_descriptions = data;
      if(this.ticket_descriptions.length === 0) return
      this.selectedTicketDescription = this.ticket_descriptions[0];
      this.getTechDescription(this.selectedDevice, this.selectedTicketDescription)
    })
  }

  getTechDescription(device: string, ticket_description: string){
    let devTicketDesc: DeviceTicket = {device, ticket_description}
    this.indicadoresService.getTechDescriptions(devTicketDesc).subscribe(data => {
      this.tech_descriptions = data;
      if(this.tech_descriptions.length === 0) return
      this.selectedTechDescription = this.tech_descriptions[0];
    })
  }

  onPartyChange(target: any){
    this.selectedParty = target.value;
    this.getDevices(this.selectedParty);
  }

  onDeviceChange(target: any){
    this.selectedDevice = target.value;
    this.getActivityTypes()
  }

  onActivityTypeChange(target : any){
    this.selectedActivityType = target.value;
    this.getTicketDescriptions(this.selectedDevice, this.selectedActivityType);
  }

  onTicketDescriptionChange(target: any){
    this.selectedTicketDescription = target.value;
    this.getTechDescription(this.selectedDevice, this.selectedTicketDescription);
  }

  onTechDescriptionChange(target: any){
    this.selectedTechDescription = target.value;
  }

  testInfo(){
    console.log(
      {partida: this.selectedParty},
      {device: this.selectedDevice},
      {activity_type: this.selectedActivityType},
      {ticket_description: this.selectedTicketDescription},
      {tech_decription: this.selectedTechDescription}
    )
  }



}
