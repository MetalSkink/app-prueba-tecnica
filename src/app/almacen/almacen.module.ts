import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelInventarioComponent } from './pages/panel-inventario/panel-inventario.component';
import { AlmacenRoutingModule } from './almacen.routing.module';



@NgModule({
  declarations: [
    PanelInventarioComponent
  ],
  imports: [
    CommonModule,
    AlmacenRoutingModule
  ]
})
export class AlmacenModule { }
