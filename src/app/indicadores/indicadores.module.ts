import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndicaLayoutComponent } from './layouts/indica-layout/indica-layout.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';



@NgModule({
  declarations: [
    IndicaLayoutComponent,
    ActividadesComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule,
    SharedModule
  ]
})
export class IndicadoresModule { }
