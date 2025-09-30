// Acumulador
var num1 = '0';
var num2 = '0';
var operador = undefined;

function darC() {
    num1 = '0';
    num2 = '0';
    operador = undefined;
    resfrescar();
    console.log("borrado");
}

function darNumero(numero) {
    if (num1 == '0') {
        num1 = numero;
    } else if (operador == undefined) {
        num1 += numero;
    } else {
        if (num2 == '0') {
            num2 = numero;
        } else {
            num2 += numero;
        }
    }
    resfrescar();
    console.log("Numero añadido.Num1: " + num1 + " Num2: " + num2);
}

function darComa() {
    if (operador == undefined && num1.indexOf('.') == -1) {
        num1 += '.';
        console.log("Coma añadida a num1: " + num1);
    } else if (num2.indexOf('.') == -1) {
        num2 += '.';
        console.log("Coma añadida a num2" + num2);
    }
    resfrescar();
}

function operar(valor) {
    if (operador != undefined) { esIgual(); }
    operador = valor;
    resfrescar();
    console.log("Operador añadido: " + operador);
}

function esIgual() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operador) {
        case '+': num1 += num2;
            break;
        case '-': num1 -= num2;
            break;
        case 'x': num1 *= num2;
            break;
        case '/': num1 /= num2;
            break;
        case '^': num1 **= num2;
    }
    num1 = num1.toString();
    num2 = '0';
    operador = undefined;
    resfrescar();
    console.log("Operación realizada")
}

function resfrescar() {
    if (num1 == 0 || operador == undefined) {
        document.getElementById("valor_numero").value = num1;
    } else {
        document.getElementById("valor_numero").value = num1 + operador + num2;
    }
}