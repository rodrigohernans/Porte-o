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
        card.dataset.comuna = barrio.comuna; // Asigna la comuna al data-comuna
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

//ASIGNACION DE OPTIONS

const nombresComunas = [
    "Comuna 1", "Comuna 2", "Comuna 3", "Comuna 4", "Comuna 5", "Comuna 6",
    "Comuna 7", "Comuna 8", "Comuna 9", "Comuna 10", "Comuna 11", "Comuna 12",
    "Comuna 13", "Comuna 14", "Comuna 15"
];

const filtroComuna = document.getElementById('filtroComuna');

nombresComunas.forEach((nombre, index) => {
    const option = document.createElement('option');
    option.value = (index + 1).toString();
    option.textContent = nombre;
    option.classList.add('comunaOption');
    filtroComuna.appendChild(option);


    //agregar evento onclick a cada options

});

// FILTRADO POR COMUNA

//acceder al value del  option

filtroComuna.addEventListener("change", function () {
    let comunaSeleccionada = this.value
    let comunaConvertidaANumero = parseInt(comunaSeleccionada, 10)
    filtrarPorComuna(comunaConvertidaANumero)  //llamo a la función de filtrado con el valor seleccionado
})

// obtengo cada comuna con su numero

function obtenerComunaDeBarrios() {
    let comunas = barriosBa.map(cadaBarrio => {
        return cadaBarrio.comuna

    })
    return comunas
}

let listaDeComuna = obtenerComunaDeBarrios();

//filtrar por comuna ,  viendo si funciona o no



function filtrarPorComuna(comuna) {
    let allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        let comunaBarrio = card.dataset.comuna
        let comunaBarrioNumber = parseInt(comunaBarrio, 10)

        const coincide = (isNaN(comuna) || comunaBarrioNumber === comuna);

        if (coincide) {
            card.classList.remove("hidden")
        } else {
            card.classList.add("hidden")
        }
    })
}
