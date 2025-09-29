// Acumulador
var num1 = 0;
var num2 = 0;
var operador = null;

function darC() {
    num1 = 0;
    num2 = 0;
    document.getElementById("valor_numero").value = 0;
}

function darNumero(numero) {
        if (num1 == 0) {
            num1 = numero
        } else {
            num1 += numero;
        }
        document.getElementById("valor_numero").value = num1;
}

function darComa() {

}

function operar(valor) {
    switch(valor) {
        case 1: operador = '+';
        break;
        case 2: operador = '-';
        break;
        case 3: operador = 'x';
        break;
        case 4: operador = '/';
        break;
        case 5: operador = '^'
    }
}

function esIgual() {

}

function resfrescar() {

}