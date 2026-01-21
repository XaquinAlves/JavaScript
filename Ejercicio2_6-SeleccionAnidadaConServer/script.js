// http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync
let selectProvincia = document.getElementById("provincias");
let selectMunicipios = document.getElementById("municipios");
let spanINE = document.getElementById("codigo-ine");

function vaciarElemento(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function insertarOpcionVacia(elemento, texto) {
    let option = document.createElement('option');
    option.textContent = texto;
    option.value = "";
    option.disabled = true;
    option.selected = true;
    elemento.appendChild(option);
}

async function inicializar() {
    try {
        const respuesta = await fetch(
            "http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync/provincias.json"
        );
        const provincias = await respuesta.json();

        vaciarElemento(selectProvincia);
        insertarOpcionVacia(selectProvincia, "Selecciona una provincia");

        provincias.forEach((provincia) => {
            let option = document.createElement("option");
            option.value = provincia.id;
            option.textContent = provincia.nm;
            selectProvincia.appendChild(option);
        });
    } catch (error) {
        console.error("Error cargando provincias: ", error);
    }
}

selectProvincia.onchange = async function () {
    try {
        const respuesta = await fetch(
            "http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync/municipios.json"
        );
        const municipios = await respuesta.json();

        vaciarElemento(selectMunicipios);
        insertarOpcionVacia(selectMunicipios, "Selecciona un municipio");

        municipios.forEach((municipio) => {
            if (municipio.id.substring(0, 2) === selectProvincia.value) {
                let option = document.createElement("option");
                option.value = municipio.id;
                option.textContent = municipio.nm;
                selectMunicipios.appendChild(option);
            }
        });

        selectMunicipios.disabled = false;
    } catch (error) {
        console.error("Error cargando municipios: ", error);
    }
};

selectMunicipios.onchange = function () {
    spanINE.textContent = selectMunicipios.value;
};

inicializar();
