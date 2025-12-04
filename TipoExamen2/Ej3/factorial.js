function factorial () {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    let acumulador = 1;
    for (let i = 2; i <= numero; i++) {
        acumulador *= i;
    }

    resultado.innerHTML = `El factorial de ${numero} es ${acumulador}`
}