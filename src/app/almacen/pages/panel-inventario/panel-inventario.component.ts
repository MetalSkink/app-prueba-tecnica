import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { filtrarProductos, CalcularInventarioValorado, CalcularInventarioFinal } from "../../helpers/functions";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel-inventario',
  templateUrl: './panel-inventario.component.html',
  styleUrls: ['./panel-inventario.component.css']
})
export class PanelInventarioComponent   {

  constructor(private fb:FormBuilder) { }

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

miFormulario: FormGroup = this.fb.group({
  codigo: [, [Validators.required, Validators.min(0)]],
  producto: [, Validators.required],
  cantidad: [, [Validators.required, Validators.min(0)]],
  instalacion: [, Validators.required],
  bodega: [, Validators.required],
  precio: [, [Validators.required, Validators.min(0)]],
})

//---------------------------------------------------------

inventarioValorado!: number;
costoEntrada!: number;
inventarioFinal!: number;
costoFinal!: number;
costoMedio!: number;


CalcularValores(codigo:number,producto:string, cantidad: number, instalacion:string,bodega: string, precio:number):void {

  let productosFiltrados = filtrarProductos(this.productos, codigo, instalacion);

  let inventarioValorado = CalcularInventarioValorado(productosFiltrados);
  this.inventarioValorado = inventarioValorado;

  let costoEntrada = cantidad * precio;
  this.costoEntrada = costoEntrada;

  let inventarioFinal = CalcularInventarioFinal(productosFiltrados, cantidad)
  this.inventarioFinal = inventarioFinal;

  let costoFinal = inventarioValorado + costoEntrada
  this.costoFinal = costoFinal;

  let costoMedio = costoFinal / inventarioFinal;
  this.costoMedio = costoMedio;

  let newProducto: Producto = {
      codigo: codigo,
      instalacion: instalacion,
      inventario: cantidad,
      costoUnitario: precio,
      producto: producto,
      bodega: bodega
}
  this.productos.push(newProducto)
}

guardar(){
  //this.CalcularValores(900, 155882, 'DI', 35);
  if (this.miFormulario.invalid) {
    this.miFormulario.markAllAsTouched();
    return
  }
  const {codigo,producto,cantidad,instalacion,bodega,precio } = this.miFormulario.value;

  this.CalcularValores(codigo,producto,cantidad,instalacion,bodega,precio);
}

campoNoEsValido(campo: string){
  return this.miFormulario.controls[campo].errors &&
         this.miFormulario.controls[campo].touched
}


}
