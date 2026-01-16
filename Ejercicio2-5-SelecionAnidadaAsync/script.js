// http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync
let selectProvincia = document.getElementById("provincias");
let selectMunicipios = document.getElementById("municipios");
let spanINE = document.getElementById("codigo-ine");

function vaciarElemento(elemento) {
    while (elemento.childElementCount > 1) {
        elemento.removeChild(elemento.lastChild);
    }
}

async function inicializar() {
    try {
        const respuesta = await fetch(
            "http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync/provincias.json"
        );
        const provincias = await respuesta.json();

        vaciarElemento(selectProvincia);

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
    vaciarElemento(selectMunicipios);

    try {
        const respuesta = await fetch(
            "http://127.0.0.1:5501/Ejercicio2-5-SelecionAnidadaAsync/municipios.json"
        );
        const municipios = await respuesta.json();

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
