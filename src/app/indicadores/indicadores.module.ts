import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndicaLayoutComponent } from './layouts/indica-layout/indica-layout.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { NuevaActividadComponent } from './pages/nueva-actividad/nueva-actividad.component';
import { PreventivosComponent } from './pages/preventivos/preventivos.component';
import { FormNoPlanificadoComponent } from './components/form-no-planificado/form-no-planificado.component';
import { FormPreventivoComponent } from './components/form-preventivo/form-preventivo.component';
import { FormActAdmComponent } from './components/form-act-adm/form-act-adm.component';
import { FormControl, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndicaLayoutComponent,
    ActividadesComponent,
    NuevaActividadComponent,
    PreventivosComponent,
    FormNoPlanificadoComponent,
    FormPreventivoComponent,
    FormActAdmComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    IndicadoresRoutingModule,
    SharedModule
  ]
})
export class IndicadoresModule { }
