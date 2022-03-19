import { Producto } from '../interfaces/producto.interface';

export function filtrarProductos(productos:Producto[], codigo:number, instalacion:string) {
  let productosValidos1 = productos.filter(producto => producto.codigo === codigo);
  let productosValidos2 = productosValidos1.filter(producto => producto.instalacion === instalacion);

  return productosValidos2;
}

export function CalcularInventarioValorado(productosFiltrados:Producto[]) {
  let inventarioValorado = 0;
  productosFiltrados.map(producto => {
      inventarioValorado += producto.inventario * producto.costoUnitario;
  })
  return inventarioValorado;
}

export function CalcularInventarioFinal(productosFiltrados: Producto[], palas:number) {
  let inventarioFinal = 0;
  productosFiltrados.map(producto => {
      inventarioFinal += producto.inventario
  })
  inventarioFinal += palas
  return inventarioFinal;
}
