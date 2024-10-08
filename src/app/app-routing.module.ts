import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresModule } from './indicadores/indicadores.module';

const routes: Routes = [
  {
    path: 'indicadores',
    loadChildren: () => import('./indicadores/indicadores.module').then(m => m.IndicadoresModule )
  },
  {
    path:'**',
    redirectTo: 'indicadores'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
