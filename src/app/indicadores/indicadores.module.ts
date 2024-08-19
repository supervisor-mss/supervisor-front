import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndicaLayoutComponent } from './layouts/indica-layout/indica-layout.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { NuevaActividadComponent } from './pages/nueva-actividad/nueva-actividad.component';
import { PreventivosComponent } from './pages/preventivos/preventivos.component';



@NgModule({
  declarations: [
    IndicaLayoutComponent,
    ActividadesComponent,
    NuevaActividadComponent,
    PreventivosComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    SharedModule
  ]
})
export class IndicadoresModule { }
