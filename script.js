import { barriosBa } from "./barrios.js";

//mostrar cards dinamismo
function mostrarCards() {
    let contenedorPrincipal = document.getElementById("container-cards");

    if (!contenedorPrincipal) {
        console.error("El contenedor principal no se encontró.");
        return;
    }
    contenedorPrincipal.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas cards

    barriosBa.forEach((barrio) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h5 class="tituloBarrio" >${barrio.nombre}</h5>
            <img src="${barrio.imagen}" alt="${barrio.nombre}" id="${barrio.id}"/> 
            <p class="descripcionBreve">${barrio.descripcionBreve}</p>
            <button id="info-button-${barrio.id}">Más Información</button>
        `;
        contenedorPrincipal.appendChild(card);
    })
}

mostrarCards();

//Buscar inputs search value, y filtrar ... 

let searchElement = document.getElementById("searchBarrio")

searchElement.addEventListener("input", function (e) {
    let searchTerm = e.target.value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas
    let allCards = document.querySelectorAll(".card"); // Obtener todas las cards

    allCards.forEach(card => {
        let tituloH5 = card.querySelector("h5").textContent.toLocaleLowerCase();
        if (tituloH5.includes(searchTerm)) {
            card.classList.remove("hidden")
        } else {
            card.classList.add("hidden")
        }
    })

}) 