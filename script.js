const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    // Cambia el ícono
    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '&times;'; // Cruz
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburguesa
    }
});

console.log('Archivo JavaScript enlazado correctamente');
