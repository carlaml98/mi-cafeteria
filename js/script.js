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
    let contador = 0;

    const botonMenu = document.getElementById("btn-menu");
    const hero = document.querySelector(".hero");

    // Crear el contador visual
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
});