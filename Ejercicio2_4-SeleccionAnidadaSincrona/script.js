let selectProvincia = document.getElementById("provincias");
let selectMunicipios = document.getElementById("municipios");
let spanINE = document.getElementById("codigo-ine");

datosProvincias.forEach(provincia => {
    let option = document.createElement('option');
    option.value = provincia.id;
    option.textContent = provincia.nm;
    selectProvincia.appendChild(option);
});

selectProvincia.onchange = function () {
    while (selectMunicipios.childElementCount > 1) {
        selectMunicipios.removeChild(selectMunicipios.lastChild);
    }

    datosMunicipios.forEach(municipio => {
        if (municipio.id.substring(0,2) === selectProvincia.value) {
            let option = document.createElement('option');
            option.value = municipio.id;
            option.textContent = municipio.nm;
            selectMunicipios.appendChild(option)
        }
    })

    selectMunicipios.disabled = false;
    spanINE.textContent = "";
}

selectMunicipios.onchange = function () {
    spanINE.textContent = selectMunicipios.value;
}