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
