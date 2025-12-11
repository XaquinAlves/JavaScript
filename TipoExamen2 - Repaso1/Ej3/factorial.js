function factorial() {
    let numero = document.getElementById('numero');
    let resultado =document.getElementById('resultado');
    let acumulador = 1;

    for (let i = 2; i <= numero.value; i++) {
        acumulador *= i;
    }

    resultado.innerHTML = `El factorial de ${numero.value} es ${acumulador}`
}