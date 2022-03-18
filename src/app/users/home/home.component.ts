import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private router:Router){

  }

  navegar(){
    this.router.navigateByUrl('/almacen/panel-inv');
  }


}
