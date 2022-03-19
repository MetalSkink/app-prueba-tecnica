import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelInventarioComponent } from './pages/panel-inventario/panel-inventario.component';
import { AlmacenRoutingModule } from './almacen.routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    PanelInventarioComponent
  ],
  imports: [
    CommonModule,
    AlmacenRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AlmacenModule { }
