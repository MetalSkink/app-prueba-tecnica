import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { filtrarProductos, CalcularInventarioValorado, CalcularInventarioFinal } from "../../helpers/functions";

@Component({
  selector: 'app-panel-inventario',
  templateUrl: './panel-inventario.component.html',
  styleUrls: ['./panel-inventario.component.css']
})
export class PanelInventarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productos: Producto[] = [{
    codigo: 155882,
    producto: "PALA 5560-2",
    instalacion: 'IC',
    bodega: '01',
    inventario: 1000,
    costoUnitario: 41.70
},
{
    codigo: 155882,
    producto: "PALA 5560-2",
    instalacion: 'IC',
    bodega: 'EX',
    inventario: 500,
    costoUnitario: 41.70
},
{
    codigo: 155882,
    producto: "PALA 5560-2",
    instalacion: 'DI',
    bodega: 'DI',
    inventario: 1300,
    costoUnitario: 36
},
{
    codigo: 155882,
    producto: "PALA 5560-2",
    instalacion: 'DI',
    bodega: 'CD',
    inventario: 1000,
    costoUnitario: 36
},
{
    codigo: 352425,
    producto: "Cuchilla 25",
    instalacion: 'IC',
    bodega: '01',
    inventario: 2000,
    costoUnitario: 8.3
},
{
    codigo: 352425,
    producto: "Cuchilla 25",
    instalacion: 'IC',
    bodega: 'EX',
    inventario: 500,
    costoUnitario: 8.3
}
]

codigoFormulario: number = 0
productoNombre: string = ''
cantidadFormulario: number = 0
instalacionFormulario: string = ''
bodega: string = ""
precioFormulario: number = 0
//---------------------------------------------------------

inventarioValorado!: number;
costoEntrada!: number;
inventarioFinal!: number;
costoFinal!: number;
costoMedio!: number;


CalcularValores(palas: number, codigo:number, instalacion:string, precio:number):void {

  let productosFiltrados = filtrarProductos(this.productos, codigo, instalacion);

  let inventarioValorado = CalcularInventarioValorado(productosFiltrados);
  this.inventarioValorado = inventarioValorado;

  let costoEntrada = palas * precio;
  this.costoEntrada = costoEntrada;

  let inventarioFinal = CalcularInventarioFinal(productosFiltrados, palas)
  this.inventarioFinal = inventarioFinal;

  let costoFinal = inventarioValorado + costoEntrada
  this.costoFinal = costoFinal;

  let costoMedio = costoFinal / inventarioFinal;
 this.costoMedio = costoMedio;

  let newProducto: Producto = {
      codigo: codigo,
      instalacion: instalacion,
      inventario: palas,
      costoUnitario: precio,
      producto: this.productoNombre,
      bodega: this.bodega

  }

  this.productos.push(newProducto)
  console.log(this.productos)
}

click(){
  //this.CalcularValores(900, 155882, 'DI', 35);
  console.log(this.codigoFormulario, this.cantidadFormulario,this.instalacionFormulario,this.precioFormulario);
  this.CalcularValores(this.cantidadFormulario, this.codigoFormulario, this.instalacionFormulario, this.precioFormulario);
}


}


