function agregarCompra(producto, precio) {
    const dataLocal = JSON.parse(localStorage.getItem('compras'));
    console.log({dataLocal})
    const lista = dataLocal || [];
    lista.push({
        producto,
        precio
    })
    localStorage.setItem('compras', JSON.stringify(lista));
    alert(`Se registró en su carrito ${producto}`);
}

function vaciarCarrito() {
    localStorage.clear();
    agregarListaCompras();
}

function agregarListaCompras() {
    const carrito = document.getElementById('carrito');
    if(carrito) {
        const dataLocal = JSON.parse(localStorage.getItem('compras')) || [];
        let html = '';
        let sumaTotal = 0;
        dataLocal.forEach(elemento => {
            html += `<li>${(elemento.producto)}: S/. ${(elemento.precio)}.00</li>`;
            sumaTotal += elemento.precio;
        });
        carrito.innerHTML = html;

        const totalCarrito = document.getElementById('totalCarrito');
        totalCarrito.innerHTML = sumaTotal;

    }
    console.log({carrito})
}

agregarListaCompras()