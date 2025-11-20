const form = document.getElementById("formUsuario");

function validar() {
    let check = [];

    validarNombre(document.getElementById("input_nombre"));
    validarPrimerApellido(document.getElementById("input_apellido1"));

    //Comprobamos la fecha de nacimiento
    validarFechaNacimiento(document.getElementById("input_fecnac"));
    //Comprobamos el tipo de documento
    check.push(
        validarDocumento(
            document.getElementById("tipo_documento"),
            document.getElementById("input_documento")
        )
    );
    //Comprobamos las contraseñas
    check.push(
        validarPass(
            document.getElementById("input_pass").value,
            document.getElementById("input_pass_repeat").value
        )
    );
    //Comprobamos los correos
    check.push(
        validarCorreo(
            document.getElementById("input_correo").value,
            document.getElementById("input_correo_repeat").value
        )
    );
    //Comprobamos el telefono
    check.push(validarTelef(document.getElementById("input_telef").value));

    //Si pasa todas las comprobaciones, mostramos el consentimiento
    if (!check.includes(false)) {
        document.getElementById("consentimiento").classList.add("is-visible");
    }
}

//Event listener para checkear el formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); //Detiene el envío del formulario
    let check = [];

    validarNombre(document.getElementById("input_nombre"));

    //Comprobamos la fecha de nacimiento
    validarFechaNacimiento(document.getElementById("input_fecnac"));
    //Comprobamos el tipo de documento
    validarDocumento(
        document.getElementById("tipo_documento"),
        document.getElementById("input_documento")
    );

    //Comprobamos las contraseñas
    validarPass(
        document.getElementById("input_pass"),
        document.getElementById("input_pass_repeat")
    );
    //Comprobamos los correos
    check.push(
        validarCorreo(
            document.getElementById("input_correo").value,
            document.getElementById("input_correo_repeat").value
        )
    );
    //Comprobamos el telefono
    check.push(validarTelef(document.getElementById("input_telef").value));

    //Si pasa todas las comprobaciones, mostramos el consentimiento
    if (form.checkValidity()) {
        document.getElementById("consentimiento").classList.add("is-visible");
    }
});

//Para el boton de aceptar consentimiento
function aceptarConsentimiento() {
    document.getElementById("consentimiento").classList.remove("is-visible");
    form.submit();
}
//Para el boton de rechazar consentimiento
function rechazarConsentimiento() {
    alert("Debe aceptar la información básica para continuar con el registro.");
    document.getElementById("consentimiento").classList.remove("is-visible");
}

function validarNombre(nombre) {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity("El nombre es obligatorio");
    } else {
        nombre.setCustomValidity("");
    }
}

function validarPrimerApellido(apellido) {
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity("El primer apellido es obligatorio");
    } else {
        apellido.setCustomValidity("");
    }
}

function validarFechaNacimiento(fecha) {
    const anoMilisegundos = 31557600000;
    //Calculamos la edad en años con la fecha de nacimiento dada
    let edad = Math.abs(new Date() - new Date(fecha.value)) / anoMilisegundos;
    if (edad < 18) {
        fecha.setCustomValidity("Debe ser mayor de edad");
    } else {
        //Si es mayor de edad
        fecha.setCustomValidity("");
    }
}

function validarDocumento(tipoDocumento, numDocumento) {
    const dniPattern = /^\d{8}[A-HJ-NP-TV-Z]$/i;
    const niePattern = /^(X|Y|Z)\d{7}[A-HJ-NP-TV-Z]$/;

    if (tipoDocumento.value == "DNI") {
        //Si es un DNI
        //Comprobamos el DNI
        if (!dniPattern.test(numDocumento.value)) {
            //Si no cumple el patron, mostramos el error
            document.getElementById("errorDni").innerHTML =
                "Introduzca 8 numeros y una letra al final. Si su DNI tiene menos de 9 caracteres, complete con 0 a la izquierda";
            document.getElementById("errorDni").style = "visibility: visible";

            numDocumento.setCustomValidity("Formato inválido");
        } else {
            //Si es correcto
            document.getElementById("errorDni").innerHTML = "";
            document.getElementById("errorDni").style = "visibility: hidden";
            numDocumento.setCustomValidity("");
        }
    } else if (tipoDocumento.value == "NIE") {
        //Si es un NIE
        if (!niePattern.test(numDocumento.value)) {
            //Si no cumple el patron, mostramos el error
            document.getElementById("errorDni").innerHTML =
                "Introduzca 9 caracteres, X,Y o Z seguido de 7 numeros y una letra final.";
            document.getElementById("errorDni").style = "visibility: visible";
            numDocumento.setCustomValidity("Formato inválido");
        } else {
            //Si es correcto
            document.getElementById("errorDni").innerHTML = "";
            document.getElementById("errorDni").style = "visibility: hidden";
            numDocumento.setCustomValidity("");
        }
    }
}

function validarPass(pass, repeat) {
    const passPattern = /[!@#%\^&*]{2,}/;

    if (!passPattern.test(pass.value)) {
        //Si no contiene al menos 2 caracteres especiales, mostramos el error
        document.getElementById("errorPass").innerHTML =
            "Las contraseña debe contener al menos 2 caracteres especiales (!@#%^&*).";
        document.getElementById("errorPass").style = "visibility: visible";
        pass.setCustomValidity("Contraseña poco segura")
    } else if (pass.value !== repeat.value) {
        //Si no coinciden, mostramos el error
        document.getElementById("errorPass").innerHTML = "";
        document.getElementById("errorPass").style = "visibility: hidden";
        repeat.setCustomValidity("Las contraseñas no coinciden")
    } else {
        //Si coinciden
        document.getElementById("errorPass").innerHTML = "";
        document.getElementById("errorPass").style = "visibility: hidden";
        pass.setCustomValidity("")
        repeat.setCustomValidity("")
    }
}

function validarCorreo(correo, repeat) {
    const emailPattern = /^[a-z]+\w*@[a-z0-9]+\.[a-z]+(\.[a-z]*)*$/iu;

    if (!emailPattern.test(correo)) {
        //Si no cumple el patrón, mostramos el error
        document.getElementById("errorEmail").innerHTML =
            "El correo tiene formato erróneo.";
        document.getElementById("errorEmail").style = "visibility: visible";
        return false;
    } else if (correo !== repeat) {
        //Si no coinciden, mostramos el error
        document.getElementById("errorEmail").innerHTML =
            "Los correos no coinciden.";
        document.getElementById("errorEmail").style = "visibility: visible";
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorEmail").style = "visibility: hidden";
        return true;
    }
}

function validarTelef(telef) {
    const telefonoPattern =
        /^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/;

    if (!telefonoPattern.test(telef)) {
        //Si no cumple el patron, mostramos el error
        document.getElementById("errorTel").innerHTML =
            "Formato de teléfono no válido.";
        document.getElementById("errorTel").style = "visibility: visible";
        return false;
    } else {
        //Si lo cumple
        document.getElementById("errorTel").innerHTML = "";
        document.getElementById("errorTel").style = "visibility: hidden";
        return true;
    }
}
