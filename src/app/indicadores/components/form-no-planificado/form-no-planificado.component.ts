import { Component, OnInit } from '@angular/core';
import { Party } from '../../interfaces/Party.interface';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'indicadores-form-no-planificado',
  templateUrl: './form-no-planificado.component.html',
  styleUrl: './form-no-planificado.component.css'
})
export class FormNoPlanificadoComponent implements OnInit{



  parties: Party[] = [];
  devices: string[] = [];
  activity_types: string[] = [];


  selectedParty: string = "";
  selectedDevice: string = "";
  selectedActivityType: string = "";

  constructor(
    private indicadoresService: IndicadoresService
  ){}

  ngOnInit(): void {
    this.getAllParties();
    this.getActivityTypes();
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
    });
  }

  getActivityTypes(){
    this.indicadoresService.getActivityTypes().subscribe(data => {
      this.activity_types = data;
      if(this.activity_types.length === 0) return
      this.selectedActivityType = this.activity_types[0]
    })
  }

  onPartyChange(target: any){
    this.selectedParty = target.value;
    this.getDevices(this.selectedParty);
  }

  onDeviceChange(target: any){
    this.selectedDevice = target.value;
  }

  onActivityTypeChange(target : any){
    this.selectedActivityType = target.value;
  }

  testInfo(){
    console.log(
      {partida: this.selectedParty},
      {device: this.selectedDevice},
      {activity_type: this.selectedActivityType}
    )
  }



}
