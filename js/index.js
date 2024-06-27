const contenedorTienda = document.getElementById ("productos-container");

function crearProductosTienda(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "Productos-inicio";
        nuevoProducto.innerHTML = `
        <img src="./img/productos/${productos.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al Carrito</button>
        `
        contenedorTienda.appendChild(nuevoProducto);
        contenedorTienda.getElementsByTagName("button")[0].addEventListener
    });
}
        crearProductosTienda(CarritoTienda);