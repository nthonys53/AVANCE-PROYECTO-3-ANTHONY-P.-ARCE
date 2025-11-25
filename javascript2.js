// Javascript 2 - Manipulación del DOM
function cambiarColor() {
    const parrafo = document.querySelector('p');
    parrafo.style.color = 'lime';
}

function agregarTexto() {
    const parrafo = document.querySelector('p');
    parrafo.innerHTML += "<br>Texto agregado dinámicamente";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("javascript2.js cargado correctamente");
});