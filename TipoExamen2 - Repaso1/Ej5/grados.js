let tipoConversion = document.getElementById('tipo');
let labelGrados = document.getElementById('labelGrados');
let inputGrados = document.getElementById('grados');
let resultado = document.getElementById('resultado');

tipoConversion.addEventListener('change', function (event) {
    if (Number(tipoConversion.value) === 1) {
        labelGrados.innerHTML = "Introduce los grados Fahrenheit: ";
    } else if (Number(tipoConversion.value) === 2) {
        labelGrados.innerHTML = "Introduce los grados Celsius: ";
    }
});

function convertir() {
    if (Number(tipoConversion.value) === 1) {
        let conversion = (Number(inputGrados.value) - 32) * (5/9);
        resultado.innerHTML = `${inputGrados.value} ºF son ${conversion} ºC`
    } else if (Number(tipoConversion.value) === 2) {
        labelGrados.innerHTML = "Introduce los grados Celsius: ";
        let conversion = (Number(inputGrados.value) * (9 / 5)) + 32;
        resultado.innerHTML = `${inputGrados.value} ºC son ${conversion} ºF`;
    }
}





