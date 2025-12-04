function checkPalindrome() {
    const texto = document.getElementById('frase').value;
    const resultado = document.getElementById('resultado');
    let textoLimpio = texto.toLowerCase().trim().replaceAll(/[ \.\,\;\-\_]*/g,"");
    console.log(textoLimpio);
    let textoInvertido = textoLimpio.split("").reverse().join("");

    if (textoLimpio === textoInvertido) {
        resultado.innerHTML = `${texto} es un palíndromo`
    } else {
        resultado.innerHTML = `${texto} no es un palíndromo`;
    }
}