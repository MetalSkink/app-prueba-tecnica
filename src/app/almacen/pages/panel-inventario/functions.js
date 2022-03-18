function filtrarProductos(productos, codigo, instalacion) {
    productosValidos1 = productos.filter(producto => producto.codigo === codigo);
    productosValidos2 = productosValidos1.filter(producto => producto.instalacion === instalacion);

    return productosValidos2;
}

function CalcularInventarioValorado(productosFiltrados) {
    let inventarioValorado = 0;
    productosFiltrados.map(producto => {
        inventarioValorado += producto.inventario * producto.costoUnitario;
    })
    return inventarioValorado;
}

function CalcularInventarioFinal(productosFiltrados, palas) {
    let inventarioFinal = 0;
    productosFiltrados.map(producto => {
        inventarioFinal += producto.inventario
    })
    inventarioFinal += palas
    return inventarioFinal;
}

module.exports = {
    filtrarProductos,
    CalcularInventarioValorado,
    CalcularInventarioFinal
}