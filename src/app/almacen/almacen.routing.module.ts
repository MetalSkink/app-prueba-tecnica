import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PanelInventarioComponent } from "./pages/panel-inventario/panel-inventario.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'panel-inv', component: PanelInventarioComponent},
      {path: '**', redirectTo: 'panel-inv' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AlmacenRoutingModule { }
