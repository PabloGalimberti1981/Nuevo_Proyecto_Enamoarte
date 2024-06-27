const contenedorTienda = document.getElementById ("productos-container");

function crearProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "producto";
        nuevoProducto.innerHTML = `
        <img src="./img/productos/${producto.id}.jpg" alt="CarritoTienda 1">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al Carrito</button>
        `
        contenedorTienda.appendChild(nuevoProducto);
        contenedorTienda.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
    });
}
        crearProductosInicio("CarritoTienda");