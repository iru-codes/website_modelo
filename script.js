function loadComponent(conteinerId, filePath) {
    fetch(filePath)
    .then(response =>{
        if (!response.ok) {
            throw new Error(`Erroro al cargar ${filePath}: ${response.statusText}`)
        }
        return response.text()
    })
    .then(html =>{
        document.getElementById(conteinerId).innerHTML = html
    })
    .catch(error => console.error(error))
}

document.addEventListener("DOMContentLoaded", () =>{
    loadComponent("header", "/generales/header.html")
    loadComponent("footer", "/generales/footer.html")
})

// Selección de elementos del carrusel
const items = document.querySelectorAll('.au_carrusel_item'); // Todas las tarjetas
const botonIzquierda = document.getElementById('flecha_izquierda'); // Botón izquierdo
const botonDerecha = document.getElementById('flecha_derecha'); // Botón derecho
let indiceActual = 0; // Índice de la tarjeta activa

// Función para actualizar el estado del carrusel
function actualizarCarrusel(indice) {
    items.forEach((item, i) => {
        // Remover la clase activa de todas las tarjetas
        item.classList.remove('item_carrousel-activa');
        item.style.opacity = '0'; // Ocultar tarjeta

        // Si el índice coincide, activar la tarjeta
        if (i === indice) {
            item.classList.add('item_carrousel-activa');
            item.style.opacity = '1'; // Mostrar tarjeta
        }
    });
}

// Evento para el botón izquierdo
botonIzquierda.addEventListener('click', () => {
    // Desplazar hacia atrás (cíclico)
    indiceActual = (indiceActual - 1 + items.length) % items.length;
    actualizarCarrusel(indiceActual);
});

// Evento para el botón derecho
botonDerecha.addEventListener('click', () => {
    // Desplazar hacia adelante (cíclico)
    indiceActual = (indiceActual + 1) % items.length;
    actualizarCarrusel(indiceActual);
});

// Inicializar el carrusel mostrando la primera tarjeta
actualizarCarrusel(indiceActual);
