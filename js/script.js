function toggleModo() {
    document.body.classList.toggle('oscuro');
    const btn = document.getElementById('modo-oscuro');
    if (document.body.classList.contains('oscuro')) {
        btn.textContent = '☀️';
    } else {
        btn.textContent = '🌙';
    }
}