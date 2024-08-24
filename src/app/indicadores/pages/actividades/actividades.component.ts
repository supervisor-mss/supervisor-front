import { Component, numberAttribute, OnInit } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css'
})
export class ActividadesComponent implements OnInit {

  date: Date = new Date(Date.now());
  constructor(
    private indicadoresService: IndicadoresService
  ){}

  ngOnInit(): void {
    console.log(this.date.toISOString().slice(0,10))
  }

  

  setDate(){
    console.log(this.date)
  }



  

}
