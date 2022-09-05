//Funcion que solicita al cliente que ingrese el producto que busca, le muestra una lista de los productos disponibles
function saludar() {
    listado = productos.map((art) => art.nombre);
    nombre = prompt(`Hola! Que producto buscas? Tenemos disponible ${listado.join(", ")}.`);
    producto = productos.find(art => art.nombre === nombre);
    opcionElegida = prompt(`Buscaste ${producto.nombre}, tiene un precio de $${producto.precio}. Deseas comprar el producto? Ingresa Si para pasar a forma de pago o presiona Cancelar para salir.`);
    formaDePago(opcionElegida);
}

//Funcion que calcula los precios de diferentes formas de pago
function formaDePago(opcionElegida) {
    if (opcionElegida === "Si" || opcionElegida === "si" || opcionElegida === "sI") {
        let opcionPago = prompt(`Deseas pagar en un pago o en cuotas? Tenemos 10% de descuento en pago de contado, o 12 cuotas sin interes. Ingresa "contado" o "cuotas" (sin comillas)`);
        if (opcionPago.toLowerCase() == "contado") {
            alert(`Elegiste pago de contado, el precio con descuento es $${producto.precio * 0.9}. Pasa por caja para abonar. Gracias por elegirnos.`);
        }
        else if (opcionPago == "cuotas") {
            alert(`Elegiste pago en cuotas, el precio total $${producto.precio}, en 12 cuotas de $${producto.precio / 12}.  Pasa por caja para abonar. Gracias por elegirnos.`);
        }
        else {
            alert("No se pudo registrar la forma de pago, reiniciando...");
            saludar();
        }
    }
    else {
        alert("Gracias, vuelva prontos");
    }
}

//Declaracion e Inicializacion de Variables
let faciales;
let cuerpo;
let listado = [];
let nombre = "";
let producto = "";
let opcionElegida = "";
let opcionPago = "";

//Arreglo de Productos
let productos = [
    { id: 1, nombre: "Crema Humectante Facial", precio: 500, categoria: faciales },
    { id: 2, nombre: "Crema AntiAge Facial", precio: 600, categoria: faciales },
    { id: 3, nombre: "Crema Frio Facial", precio: 700, categoria: faciales },
    { id: 4, nombre: "Crema Humectante Cuerpo", precio: 700, categoria: cuerpo },
    { id: 5, nombre: "Crema AntiAge Cuerpo", precio: 800, categoria: cuerpo },
    { id: 6, nombre: "Crema Frio Cuerpo", precio: 900, categoria: cuerpo },
];

class Producto {
    constructor(id, nombre, precio, categoria, vendido) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.vendido = false;
    }
}

//Inicia el programa
saludar();


































/*//Funcion para iniciar el programa
function saludar() {
    precioContado = prompt(
        "Hola! Esta aplicación calcula el Interes Real/Implicito en publicaciones con Cuotas Sin Interes.\nDebes buscar la publicación con el mejor precio de contado, el mejor precio en cuotas y cargar los datos solicitados.\n\nIngresa el Precio de Contado"
    );
    precioCuotas = prompt("Ingresa el Precio en Cuotas");
    cantidadCuotas = prompt("Ingresa el numero de cuotas");
    calculadorDeInteres(precioContado, precioCuotas, cantidadCuotas);
}

//Funcion que calcula el interes total y anual
function calculadorDeInteres(precioContado, precioCuotas, candtidadCuotas) {
    interes = (precioCuotas / precioContado - 1) * 100;
    interesAnual = (12 * interes) / cantidadCuotas;
    if (isNaN(precioCuotas) || isNaN(precioContado) || isNaN(cantidadCuotas)) {
        alert("Debes ingresar digitos.");
    } else if (precioCuotas > precioContado && cantidadCuotas === 12) {
        alert(`Las cuotas tienen un interes del ${interes}% anual.`);
    } else if (precioCuotas > precioContado) {
        alert(
            `Las cuotas tienen un interes total del ${interes}%, y un interes anual del ${interesAnual}%.`
        );
    } else {
        alert("Las cuotas no tienen interes.");
    }
    reiniciar();
}

//Funcion que puede reiniciar el programa para hacer otro calculo
function reiniciar() {
    opcion = prompt("Deseas volver a calcular? Responder Si o No");
    if (opcion === "Si" || opcion === "si" || opcion === "sI") {
        saludar();
    } else alert("Gracias, vuelva prontos");
}

//Declaracion e Inicializacion de Variables
let precioContado = 0;
let precioCuotas = 0;
let cantidadCuotas = 0;
let interes = 0;
let interesAnual = 0;
let opcion = "";

saludar();
*/