const form = document.getElementById('form_bolsas');

function validar () {
    validarFecha(document.getElementById('fec_creacion'));
    validarNombreClave(document.getElementById('cocinero'));
    validarDestinatarios(document.getElementById('destinatario'));
    validarGramos(document.getElementById('gramos'));
}

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
    const numCuentaPattern = /^([A-NO-Z]{2})(\d{2})$/
}
