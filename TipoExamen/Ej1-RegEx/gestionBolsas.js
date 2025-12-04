const form = document.getElementById('form_bolsas');

function validar () {
    validarFecha(document.getElementById('fec_creacion'));
    validarNombreClave(document.getElementById('cocinero'));
    validarDestinatarios(document.getElementById('destinatario'));
    validarGramos(document.getElementById("gramos"));
    validarNumCuenta(document.getElementById('num_cuenta'));
};

function validarFecha(fecha) {
    const fechaPattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const meses31 = new Array(1, 3, 5, 7, 8, 10, 12);
    const meses30 = new Array(4, 6, 9, 11);

    if (fecha.value === '') {
        fecha.setCustomValidity('Campo obligatorio');
    } else if (!fechaPattern.test(fecha.value)) {
        fecha.setCustomValidity('Formato incorrecto');
    } else {
        const match = fecha.value.match(fechaPattern);
        if (Number(match[2]) > 12 || Number(match[2]) < 1) {
            fecha.setCustomValidity("Mes incorrecto");
        } else if (Number(match[3]) < 2025) {
            fecha.setCustomValidity("Año incorrecto");
        } else if (Number(match[1]) < 1) {
            fecha.setCustomValidity("Día incorrecto");
        } else if (
            meses31.includes(Number(match[2])) &&
            Number(match[1]) > 31
        ) {
            fecha.setCustomValidity("Día incorrecto");
        } else if (
            meses30.includes(Number(match[2])) &&
            Number(match[1]) > 30
        ) {
            fecha.setCustomValidity("Día incorrecto");
        } else if (Number(match[2]) == 2) {
            if (
                ((Number(match[3]) % 4 == 0 && Number(match[3]) % 100 != 0) || Number(match[3]) % 400 == 0)
            ) {
                if (Number(match[1]) > 29) {
                    fecha.setCustomValidity("Día incorrecto");
                } else {
                    fecha.setCustomValidity("");
                }
            } else if (Number(match[1]) > 28) {
                fecha.setCustomValidity("Día incorrecto");
            } else {
                fecha.setCustomValidity("");
            }
        } else {
            fecha.setCustomValidity("");
        }
    }
}

function validarNombreClave(nombre) {
    const nombrePattern = /^[A-Z]{2}\W\d{4}$/;

    if (nombre.value === '') {
        nombre.setCustomValidity('Campo requerido');
    } else if (!nombrePattern.test(nombre.value)) {
        nombre.setCustomValidity('Formato incorrecto');
    } else {
        nombre.setCustomValidity('');
    }
}

function validarDestinatarios(destino) {
    const destinoPattern = /^[A-Z]{2,3}_[a-z -]{5,50}\:\d{4}$/

    if (destino.value === '') {
        destino.setCustomValidity('Campo requerido');
    } else if (!destinoPattern.test(destino.value)) {
        destino.setCustomValidity('Formato inválido');
    } else {
        destino.setCustomValidity('');
    }
}

function validarGramos(gramos) {
    const gramosPattern = /^(\d{3,4})g([A-Za-z]{1,2}\d?)([A-Za-z]{1,2}\d?)$/;
    let match = gramos.value.match(gramosPattern);

    if (gramos.value === '') {
        gramos.setCustomValidity('Campo requerido')
    } else if (!match) {
        gramos.setCustomValidity('Formato inválido')
    } else if (Number(match[1]) < 100 || Number(match[1]) > 5000) {
        gramos.setCustomValidity('Cantidad de gramos incorrecta')
    } else {
        gramos.setCustomValidity('')
    }
}

function validarNumCuenta(cuenta) {
    const numCuentaPattern =
        /^(?<letra1>[A-NO-Z])(?<letra2>[A-NO-Z])(?<digitos>\d{2})\-(?<numcuenta1>\d{6})(?<numcuenta2>\d{6})\-(?<control1>\d)(?<control2>\d)$/;
    const equivalenciaLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    if (cuenta.value === '') {
        cuenta.setCustomValidity('Campo obligatorio');
    } else if (!numCuentaPattern.test(cuenta.value)) {
        cuenta.setCustomValidity('Formato incorrecto');
    } else {
        const match = cuenta.value.match(numCuentaPattern);
        let sumaLetras = equivalenciaLetras.indexOf(match.groups.letra1) + equivalenciaLetras.indexOf(match.groups.letra2) + 2;

        let numcuenta1 = match.groups.numcuenta2.split("");
        let numcuenta2 = match.groups.numcuenta2.split("");
        let sumaCuenta1 = 0;
        let sumaCuenta2 = 0;

        for (let i = 0; i < numcuenta1.length; i++){
            sumaCuenta1 += Number(numcuenta1[i]);
        }

        for (let i = 0; i < numcuenta2.length; i++) {
            sumaCuenta2 += Number(numcuenta2[i]);
        }

        sumaCuenta1 = Math.trunc(sumaCuenta1 / 6);
        sumaCuenta2 = Math.trunc(sumaCuenta2 / 6);

        if (sumaLetras != Number(match.groups.digitos)) {
            cuenta.setCustomValidity('Los dígitos no coinciden con las letras');
        } else if (sumaCuenta1 != Number(match.groups.control1) || sumaCuenta2 != Number(match.groups.control2)) {
            cuenta.setCustomValidity('Los dígitos de control no coinciden')
        } else {
            cuenta.setCustomValidity('')
        }
    }
}
