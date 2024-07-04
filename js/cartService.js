

/* Crea los productos teniendo en cuenta lo guardado en localstorage */
 const contenedorProductos = document.getElementById("productos-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

crearProductosCarrito();
function crearProductosCarrito() {
  contenedorProductos.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("productos"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "contenedor-productos";
      nuevoProducto.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Tienda 1">
    <h3>${producto.nombre}</h3>
    <span>$${producto.precio}</span>
    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>
    `;
      contenedorProductos.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          crearProductosCarrito();
          actualizarTotales();
        });
    });

function restarAlCarrito(producto) {
  // Lógica para restar producto del carrito
  // Retorna la nueva cantidad del producto
}


function reiniciarCarrito() {
  localStorage.removeItem("productos");
}

function actualizarNumeroCarrito() {
  // Lógica para actualizar el número de productos en el carrito
}


function actualizarTotales(productos) {
  let cantidad = 0;
  let precio = 0;
  productos.forEach((producto) => {
    cantidad += producto.cantidad;
    precio += producto.precio * producto.cantidad;
  });
  precioElement.innerText = precio;
  return cantidad;
}

function revisarMensajeVacio(productos) {
  carritoVacioElement.classList.toggle("escondido", productos.length > 0);
  totalesContainer.classList.toggle("escondido", productos.length === 0);
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio([]);
  actualizarTotales([]);
});


  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearProductosCarrito();

 /* Actualiza el total de precio y unidades de la página del carrito **/ 
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/**  Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("productos"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
} 
/**
  const contenedorProductos = document.getElementById("productos-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

function restarAlCarrito(producto) {
  // Lógica para restar producto del carrito
  // Retorna la nueva cantidad del producto
}

function agregarAlCarrito(producto) {
  // Lógica para agregar producto al carrito
  // Retorna la nueva cantidad del producto
}

function reiniciarCarrito() {
  localStorage.removeItem("CarritoTienda");
}

function actualizarNumeroCarrito() {
  // Lógica para actualizar el número de productos en el carrito
}

function crearProductosCarrito() {
  contenedorProductos.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("CarritoTienda")) || [];
  if (productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList.add("contenedor-productos");
      nuevoProducto.innerHTML = `
        <img src="./img/productos/${producto.id}.jpg" alt="Tienda 1">
        <h3>${producto.nombre}</h3>
        <span>$${producto.precio}</span>
        <div>
          <button class="restar-btn">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button class="agregar-btn">+</button>
        </div>
      `;
      contenedorProductos.appendChild(nuevoProducto);

      nuevoProducto.querySelector(".restar-btn").addEventListener("click", () => {
        producto.cantidad = restarAlCarrito(producto);
        cantidadElement.innerText = actualizarTotales(productos);
      });

      nuevoProducto.querySelector(".agregar-btn").addEventListener("click", () => {
        producto.cantidad = agregarAlCarrito(producto);
        cantidadElement.innerText = actualizarTotales(productos);
      });
    });
  }
  actualizarTotales(productos);
  revisarMensajeVacio(productos);
  actualizarNumeroCarrito();
}

function actualizarTotales(productos) {
  let cantidad = 0;
  let precio = 0;
  productos.forEach((producto) => {
    cantidad += producto.cantidad;
    precio += producto.precio * producto.cantidad;
  });
  precioElement.innerText = precio;
  return cantidad;
}

function revisarMensajeVacio(productos) {
  carritoVacioElement.classList.toggle("escondido", productos.length > 0);
  totalesContainer.classList.toggle("escondido", productos.length === 0);
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio([]);
  actualizarTotales([]);
});

crearProductosCarrito(); */