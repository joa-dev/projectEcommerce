let arregloDeProductos = [];

let traerProductosDelJSON = async () => {
    let fetchear = await fetch("./js/stockEnJSON.json")
    let productosFetcheados = await fetchear.json();

    productosFetcheados.forEach((item) => {
        arregloDeProductos.push(item);
    })
    visualizarProductos(arregloDeProductos);
}