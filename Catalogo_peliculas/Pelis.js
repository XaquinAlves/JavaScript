let todasLasPeliculas = [];


async function obtenerDatosPeliculas(year) {
    const API_URL = `https://api.imdbapi.dev/titles?types=MOVIE&startYear=${year}`;
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
            throw new Error(`Estado de respuesta: ${respuesta.status}`);
        }

        const resultado = await respuesta.json();
        todasLasPeliculas = resultado["titles"];
        return resultado["titles"];
    } catch (error) {
        console.error(error.message);
    }
}

function mostrarPeliculas(peliculas) {
    // [Implementar lógica para iterar sobre peliculas y pintar el HTML]
    // ...
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    peliculas.map(function (pelicula) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("pelicula-card");

        let primaryImage = document.createElement("img");
        primaryImage.classList.add("poster");
        primaryImage.src = pelicula.primaryImage.url;
        nuevoDiv.appendChild(primaryImage);

        let divInfo = document.createElement("div");
        divInfo.classList.add("info");

        let primaryTitleYear = document.createElement("h3");
        let primaryTitleText = document.createTextNode(
            pelicula.primaryTitle + ` (${pelicula.startYear})`
        );
        primaryTitleYear.appendChild(primaryTitleText);
        divInfo.appendChild(primaryTitleYear);

        let generos = document.createElement("h3");
        let generosText = document.createTextNode("Géneros: ");
        generos.appendChild(generosText);

        let generosSpan = document.createElement("span");
        let generosList = document.createTextNode(pelicula.genres.join(", "));
        generosSpan.appendChild(generosList);
        generos.appendChild(generosSpan);
        divInfo.appendChild(generos);

        if ("rating" in pelicula) {
            let rating = document.createElement("h3");
            let ratingText = document.createTextNode(`Puntuación: `);
            rating.appendChild(ratingText);

            let ratingSpan = document.createElement("span");
            let ratingSpanText = document.createTextNode(
                `⭐${pelicula.rating.aggregateRating}`
            );
            ratingSpan.appendChild(ratingSpanText);
            rating.appendChild(ratingSpan);
            divInfo.appendChild(rating);
        }

        let plot = document.createElement("p");
        plot.classList.add("plot");
        let plotText = document.createTextNode(pelicula.plot);
        plot.appendChild(plotText);
        divInfo.appendChild(plot);

        nuevoDiv.appendChild(divInfo);
        catalogo.appendChild(nuevoDiv);
    });
}

async function iniciarCatalogo(year) {
    // [Implementar mensaje de carga, try...catch, y llamadas a las funciones]
    // ...
    const catalogo = document.getElementById("catalogo");
    let cargando = document.createElement("h2");
    let cargandoText = document.createTextNode("Cargando películas...");
    cargando.appendChild(cargandoText);
    catalogo.appendChild(cargando);

    try {
        todasLasPeliculas = await obtenerDatosPeliculas(year);
        mostrarPeliculas(todasLasPeliculas);
    } catch (error) {
        console.error(error.message);
    }
}

document
    .getElementById("search-btn")
    .addEventListener("click", function (event) {
        let año = document.getElementById("year-selector");
        iniciarCatalogo(año.value);
    });
let genero = document.getElementById("genre-filter");

genero.addEventListener("change", function (event) {
        let peliculasFiltradas = todasLasPeliculas.filter(function (pelicula) {
            if (genero.value === "") {
                return pelicula;
            } else {
                if (pelicula.genres.includes(genero.value)) {
                    return pelicula;
                }
            }
        });
        mostrarPeliculas(peliculasFiltradas);
    });

document
    .getElementById("rating-filter")
    .addEventListener("change", function (event) {
        let rating = document.getElementById("rating-filter");
        let peliculasFiltradas = todasLasPeliculas.filter(function (pelicula) {
            if (pelicula.rating > rating.value) {
                return pelicula;
            }
        });
        mostrarPeliculas(peliculasFiltradas);
    });
