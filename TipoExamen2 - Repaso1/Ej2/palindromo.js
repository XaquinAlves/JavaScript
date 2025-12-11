function checkPalindrome() {
    let texto = document.getElementById('texto');
    let resultado = document.getElementById('resultado')

    if (texto.value !== '') {
        let textoLimpio = texto.value.toLowerCase().trim().replace(/[ _\-\.\,\;]*/, '');
        let textoInvertido = textoLimpio.split("").reverse().join("");

        if (textoLimpio === textoInvertido) {
            resultado.innerHTML = `${texto.value} es un palíndromo`
        } else {
            resultado.innerHTML = `${texto.value} no es un palíndromo`;
        }
    }
}