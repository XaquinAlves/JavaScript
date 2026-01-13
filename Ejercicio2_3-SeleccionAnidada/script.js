const datos = {
    Madrid: [
        { nombre: "Madrid", ine: "28079" },
        { nombre: "Alcalá de Henares", ine: "28005" },
        { nombre: "Móstoles", ine: "28092" },
    ],
    Barcelona: [
        { nombre: "Barcelona", ine: "08019" },
        { nombre: "Badalona", ine: "08015" },
        { nombre: "Sabadell", ine: "08187" },
    ],
    Sevilla: [
        { nombre: "Sevilla", ine: "41091" },
        { nombre: "Dos Hermanas", ine: "41038" },
        { nombre: "Alcalá de Guadaíra", ine: "41004" },
    ],
};

let selectProvincia = document.getElementById("select-provincia");
let selectMunicipios = document.getElementById("select-municipio");
let spanINE = document.getElementById("codigo-ine");

Object.keys(datos).forEach((nombrePais) => {
    let option = document.createElement('option');
    option.value = nombrePais;
    let text = document.createTextNode(nombrePais);
    option.appendChild(text);
    selectProvincia.appendChild(option);
})

selectProvincia.addEventListener('change', (event) => {
    if (selectProvincia.value !== "") {
        selectMunicipios.disabled = false;
        while (selectMunicipios.childElementCount > 1) {
            selectMunicipios.removeChild(selectMunicipios.lastChild);
        }
        selectMunicipios.lastChild.selected = false;
        datos[selectProvincia.value].forEach((municipio) => {
            let option = document.createElement('option');
            option.value = municipio.nombre;
            let texto = document.createTextNode(municipio.nombre);
            option.appendChild(texto);
            selectMunicipios.appendChild(option);
        })
        spanINE.textContent = "-";
    } else {
        selectMunicipios.disabled = true;
    }
})

selectMunicipios.addEventListener('click', (event) => {
    if (selectMunicipios !== "" ) {
        datos[selectProvincia.value].forEach((municipio) => {
            if (selectMunicipios.value === municipio.nombre) {
                spanINE.textContent = municipio.ine;
            }
        })
    }
})
