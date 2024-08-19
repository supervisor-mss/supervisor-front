import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { IndicadoresRoutingModule } from '../indicadores/indicadores-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ],
  exports:[
    HeaderComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
