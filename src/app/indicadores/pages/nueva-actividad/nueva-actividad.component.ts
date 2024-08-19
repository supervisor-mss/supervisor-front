import { Component } from '@angular/core';

@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.component.html',
  styleUrl: './nueva-actividad.component.css'
})
export class NuevaActividadComponent {

  tipeActivitySelected: string = "NO_PLANIFICADO"

  active1: string = 'is-act'
  active2: string = ''
  active3: string = ''


  changeStatus(typeActivity: string){
    this.tipeActivitySelected = typeActivity;
    console.log(this.tipeActivitySelected)
    switch(this.tipeActivitySelected){
      case 'NO_PLANIFICADO':
        this.active1 = 'is-act';
        this.active2 = '';
        this.active3 = '';
        break;
      case 'PREVENTIVO':
        this.active1 = '';
        this.active2 = 'is-act';
        this.active3 = '';
        break;
      case 'ACT_ADM':
        this.active1 = '';
        this.active2 = '';
        this.active3 = 'is-act';
        break;
      default:
        return;
    }
  }

}
