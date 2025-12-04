function comprobarNota() {
    const campoNota = document.getElementById('nota');
    let resultado = document.getElementById('resultado');

    if (nota.value < 5) {
        resultado.innerHTML = "Suspenso";
        resultado.style.backgroundColor = "red";
        resultado.style.color = "white";
    } else if (nota.value < 7) {
        resultado.innerHTML = "Aprobado";
        resultado.style.backgroundColor = "yellow";
        resultado.style.color = "black";
    } else if (nota.value < 9) {
        resultado.innerHTML = "Notable";
        resultado.style.backgroundColor = "green";
        resultado.style.color = "white";
    } else {
        resultado.innerHTML = "Sobresaliente!!!";
        resultado.style.backgroundColor = "green";
        resultado.style.color = "gold";
    }
}