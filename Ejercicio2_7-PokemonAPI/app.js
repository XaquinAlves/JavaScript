const container = document.getElementById("pokemonContainer");
const input = document.getElementById("pokemonInput");
const btn = document.getElementById("btnBuscar");
const API_URL = "https://pokeapi.co/api/v2/pokemon";

async function obtenerPokemon(nombre) {
    // Tu código aquí: fetch...
    const respuesta = await fetch(API_URL + `/${nombre}`);
    return await respuesta.json();
}

function dibujarTarjeta(pokemon) {
    const card = `
        <div class="col">
            <div class="card h-100 pokemon-card shadow-sm">
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top p-2">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                    <p class="text-muted">ID: ${pokemon.id}</p>
                    <span class="badge bg-primary">${pokemon.types[0].type.name}</span>
                </div>
            </div>
        </div>`;
    container.innerHTML = card; // Para la búsqueda individual
}

btn.addEventListener("click", async () => {
    const nombre = input.value;
    const datos = await obtenerPokemon(nombre);
    dibujarTarjeta(datos);
});
