// Javascript 2 - Manipulación del DOM

/**
 * Cambia el color del párrafo a verde lima
 */
function cambiarColor() {
    const parrafo = document.querySelector('p');
    parrafo.style.color = 'lime';
}

/**
 * Agrega texto dinámicamente al párrafo
 */
function agregarTexto() {
    const parrafo = document.querySelector('p');
    parrafo.innerHTML += "<br>Texto agregado dinámicamente";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("javascript2.js cargado correctamente");
});