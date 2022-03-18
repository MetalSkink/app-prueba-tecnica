const productos = require('./src/productos');
const { filtrarProductos, CalcularInventarioValorado, CalcularInventarioFinal } = require('./src/functions')


function CalcularValores(palas, codigo, instalacion, precio) {

    let productosFiltrados = filtrarProductos(productos, codigo, instalacion);

    let inventarioValorado = CalcularInventarioValorado(productosFiltrados);
    console.log('Inventario Valorado:', inventarioValorado);

    let costoEntrada = palas * precio;
    console.log('Costo Entrada:', costoEntrada);

    let inventarioFinal = CalcularInventarioFinal(productosFiltrados, palas)
    console.log('Inventario Final:', inventarioFinal);

    let costoFinal = inventarioValorado + costoEntrada
    console.log('Costo Final:', costoFinal);

    let costoMedio = costoFinal / inventarioFinal;
    console.log('Costo Medio:', costoMedio);

    let newProducto = {
        codigo: codigo,
        instalacion: instalacion,
        inventario: palas,
        costoUnitario: precio
    }

    productos.push(newProducto)
    console.log(productos)
}

CalcularValores(900, 155882, 'DI', 35);