import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicaLayoutComponent } from './layouts/indica-layout/indica-layout.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';

const routes: Routes = [
  {
    path:'',
    component: IndicaLayoutComponent,
    children: [
      {
        path: 'actividades', 
        component: ActividadesComponent
      },
      {
        path: '**',
        redirectTo: 'actividades'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
