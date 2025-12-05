const inputTipo = document.getElementById('tipo');
const inputGrados = document.getElementById("grados");

inputTipo.addEventListener('change', function(event) {
    let label = document.getElementById("label-conversion");
    let btn = document.getElementById("btn-convertir");

    if (Number(inputTipo.value) == 0) {
        label.innerHTML = "";
        inputGrados.style.display = "none";
        btn.style.display = "none";
    } else if (Number(inputTipo.value) === 1) {
        label.innerHTML = "Introduce los grados Celsius: ";
        inputGrados.style.display = "inline";
        btn.style.display = "inline";
    } else if (Number(inputTipo.value) == 2) {
        label.innerHTML = "Introduce los grados Fahrenheit: ";
        inputGrados.style.display = "inline";
        btn.style.display = "inline";
    }
});

function convert() {
    let pResultado = document.getElementById('resultado');

    if (Number(inputTipo.value) === 1) {
        let numResultado = (Number(inputGrados.value) * (9/5)) + 32;
        pResultado.innerHTML = `${inputGrados.value}ºC son ${numResultado}ºF`
    } else if (Number(inputTipo.value) === 2) {
        let numResultado = (Number(inputGrados.value) - 32) * (5 / 9);
        pResultado.innerHTML = `${inputGrados.value}ºF son ${numResultado}ºC`;
    }
}