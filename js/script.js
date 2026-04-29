function toggleModo() {
    document.body.classList.toggle('oscuro');
    const btn = document.getElementById('modo-oscuro');
    if (document.body.classList.contains('oscuro')) {
        btn.textContent = '☀️';
    } else {
        btn.textContent = '🌙';
    }
}

function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('abierto');
}

window.addEventListener("load", function() {

    // CONTADOR
    let contador = 0;
    const botonMenu = document.getElementById("btn-menu");
    const hero = document.querySelector(".hero");

    const contadorTexto = document.createElement("p");
    contadorTexto.id = "contador";
    contadorTexto.style.color = "brown";
    contadorTexto.style.marginTop = "10px";
    contadorTexto.textContent = "Visitas al menú: 0";
    hero.appendChild(contadorTexto);

    botonMenu.addEventListener("click", function() {
        contador++;
        contadorTexto.textContent = "Visitas al menú: " + contador;
    });

    // PRODUCTOS
    const productos = [
        { nombre: "Café Americano", precio: 500, popular: true },
        { nombre: "Medialunas", precio: 400, popular: true },
        { nombre: "Torta del día", precio: 800, popular: false },
        { nombre: "Cappuccino", precio: 650, popular: true }
    ];

    productos.forEach(function(producto) {
        console.log(producto.nombre + " - $" + producto.precio);
    });

    const populares = productos.filter(function(producto) {
        return producto.popular === true;
    });

    console.log("Productos populares:", populares.length);

    // BUSCADOR
    const inputBuscar = document.getElementById("buscar");

    inputBuscar.addEventListener("input", function() {
        const texto = inputBuscar.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".tarjeta");

        tarjetas.forEach(function(tarjeta) {
            const nombre = tarjeta.querySelector("h3").textContent.toLowerCase();
            if (nombre.includes(texto)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });

});