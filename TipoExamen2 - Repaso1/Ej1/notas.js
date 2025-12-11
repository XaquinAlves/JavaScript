function evaluar(){
    let nota = document.getElementById('nota');
    let resultado = document.getElementById('resultado');

    if (Number(nota.value) < 5) {
        resultado.innerHTML = "Suspenso";
        resultado.style.color = "white";
        resultado.style.backgroundColor = "red";
    } else if (Number(nota.value) < 7) {
        resultado.innerHTML = "Aprobado";
        resultado.style.color = "black";
        resultado.style.backgroundColor = "yellow";
    } else if (Number(nota.value) < 9) {
        resultado.innerHTML = "Notable";
        resultado.style.color = "white";
        resultado.style.backgroundColor = "green";
    } else {
        resultado.innerHTML = "Sobresaliente";
        resultado.style.color = "gold";
        resultado.style.backgroundColor = "green";
    }
}