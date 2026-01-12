const PAISES = [
    {
        nombre: "España",
        capital: "Madrid",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Francia",
        capital: "París",
        continente: "Europa",
        moneda: "Euro",
    },
    { nombre: "Italia", capital: "Roma", continente: "Europa", moneda: "Euro" },
    {
        nombre: "Alemania",
        capital: "Berlín",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Portugal",
        capital: "Lisboa",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Marruecos",
        capital: "Rabat",
        continente: "África",
        moneda: "Dírham",
    },
];

function contarPaises(array) {
    return array.length;
}

function inversa(array) {
    return array.toReversed();
}

function agregarPais(array, nuevoPais) {
    return array.push(nuevoPais);
}

function bajaPais(array) {
    return array.pop()
}

function formatearPaíses(array) {
    return array.map((pais) => {
        return `nombre: "${pais.nombre}", inicial: "${pais.nombre.charAt(0)}", continente: "${pais.continente}"`;
    }
    )
}

function filtrarPaises(array, continente) {
    return array.filter((pais) =>{
        return pais.continente === continente;
    })
}

function buscarPorMoneda(array, moneda) {
    return array.filter((pais) => {
        return pais.moneda === moneda;
    }).map((pais) => {
        return pais.nombre;
    })
}

function capitalMasLarga(array) {
    return array.reduce((acc, actual, indice) => {
        if (actual.capital.length > acc.capital.length) {
        }
    });
}

console.log(contarPaises(PAISES));
console.log(inversa(PAISES));
console.log(PAISES);
console.log(
    agregarPais(PAISES, {
        nombre: "Argentina",
        capital: "Buenos Aires",
        continente: "América",
        moneda: "Peso",
    })
);
console.log(bajaPais(PAISES));
console.log(PAISES);
console.log(formatearPaíses(PAISES));
console.log(filtrarPaises(PAISES, "Europa"));
console.log(buscarPorMoneda(PAISES, "Euro"));
console.log(buscarPorMoneda(PAISES, "Dírham"));
console.log(capitalMasLarga(PAISES))