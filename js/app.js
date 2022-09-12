//Mostrar Productos del Arreglo en stock.js
let mostrarProductos = (productos) => {
    let contenedorProductos = document.getElementById("producto-contenedor")

    for (let producto of productos) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
                                <img id="imagenProducto" src="${producto.imagen}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 id="nombreProducto" class="card-title">${producto.nombre}</h5>
                                    <h6 id="precioProducto" class="card-text">$${producto.precio}</h6>
                                </div>
                                <div class="card-body">
                                    <button type="button" id="boton${producto.id}" class="btn btn-primary">Agregar al Carrito</button>
                                </div>
                            </div>`;
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`)

        boton.addEventListener(`click`, () => {
            carritoIndex(producto.id)
            alert(`Se agrego el producto ${producto.nombre}`)
        })
    }
}

mostrarProductos(productos);