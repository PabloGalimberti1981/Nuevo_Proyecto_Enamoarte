function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("CarritoTienda"));
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        nuevoProducto.cantidad = 1;
        localStorage.setItem("CarritoTienda",JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(CarritoTienda => CarritoTienda.id);
        console.log(indiceProducto)
        if(indiceProducto === -1){
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("Carrito",JSON.stringify(nuevaMemoria));
    }
}
/**Toma un producto, le agrega cantidad 1 y lo devuelve */
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("CarritoTienda"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad)
    cuentaCarritoElement.innerText = cuenta;
}
actualizarNumeroCarrito();