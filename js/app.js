const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById("vaciar-carrito");

const contadorCarrito = document.getElementById("contadorCarrito");

const precioTotal = document.getElementById("precioTotal");

let carrito = [];

//Cargar carrito desde el localStorage
document.addEventListener("DOMContentLoaded", () =>{
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
})

//Vaciar Carrito
botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})

//Visualizar Cards de Productos
for (let producto of stockProductos) {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
                            <img id="imagenProducto" src="${producto.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 id="nombreProducto" class="card-title">${producto.nombre}</h5>
                                <h6 id="precioProducto" class="card-text">$${producto.precio}</h6>
                            </div>
                            <div class="card-body">
                                <button type="button" id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>`;
    
                        contenedorProductos.appendChild(div);

                        const boton = document.getElementById(`agregar${producto.id}`)

                        boton.addEventListener("click", () => {
                            agregarAlCarrito(producto.id);
                        })
}

//Agregar al carrito y Cantidades
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId);

    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++;
            }
        })
    } else {
        const item = stockProductos.find ((prod) => prod.id === prodId);
        carrito.push(item);
    }
    actualizarCarrito();
}

//Boton Eliminar
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

//Visualizar cada producto del Carrito
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = ("productoEnCarrito");
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><img src="./assets/img/trash.svg" class="rounded float-end"></button>
        `
        contenedorCarrito.appendChild(div);

        localStorage.setItem("carrito", JSON.stringify(carrito));
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}