/**const contenedorTienda = document.getElementById ("productos-container");

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
        contenedorTienda.getElementsByTagName("button")[0].addEventListener()
    });
}
        crearProductosInicio("CarritoTienda"); */

        const contenedorTienda = document.getElementById("productos-container");

function crearProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("producto");
        nuevoProducto.innerHTML = `
            <img src="./img/productos/${producto.id}.jpg" alt="CarritoTienda 1">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button>Agregar al Carrito</button>
            
        `;
        contenedorTienda.appendChild(nuevoProducto);

        nuevoProducto.querySelector("button").addEventListener("click", function() {
            // Aquí puedes agregar la lógica para agregar el producto al carrito
            // Por ejemplo:
            // agregarAlCarrito(producto);
            console.log("Producto agregado al carrito");
        });
    });
}

const productos = [
    { id: 1, nombre: "Arco iris", precio: 10 },
    { id: 2, nombre: "Encastre", precio: 20 },
    { id: 3, nombre: "Numeros", precio: 30 },
    { id: 1, nombre: "Numeros2", precio: 10 },
    { id: 2, nombre: "Pesca", precio: 20 }
   
    
];

crearProductosInicio(productos);