//lógica para abrir y cerrar el menú
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');



hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); //agrega o quita la clase
    hamburger.textContent = menu.classList.contains('active') ? '☒' : '☰'; //cambia el logo por una ☒
});


console.log('Archivo JavaScript enlazado correctamente')