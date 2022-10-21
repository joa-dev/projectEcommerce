//Boton WhatsApp (envia mensaje con el contenido del carrito)
botonWhatsApp.addEventListener("click", () => {
    let productosConPrecio = "";
    carrito.forEach((item)=>{
        productosConPrecio = productosConPrecio + item.nombre + " $" + item.precio + " x " + item.cantidad + " - ";
    })
    window.open(`https://wa.me/543743513248?text=Hola!%20Quiero%20comprar%20estos%20productos:%20${productosConPrecio} Total $${precioTotal.innerText}.`);
});