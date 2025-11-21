const form = document.getElementById("formUsuario");

function validar() {

    validarNombre(document.getElementById("input_nombre"));
    validarPrimerApellido(document.getElementById("input_apellido1"));

    //Comprobamos la fecha de nacimiento
    validarFechaNacimiento(document.getElementById("input_fecnac"));
    //Comprobamos el tipo de documento
    validarDocumento(
        document.getElementById("tipo_documento"),
        document.getElementById("input_documento")
    );

    validarNumSoporte(document.getElementById("input_numsoporte"));
    //Comprobamos las contraseñas
    validarPass(
        document.getElementById("input_pass"),
        document.getElementById("input_pass_repeat")
    );
    //Comprobamos los correos

    validarCorreo(
        document.getElementById("input_correo"),
        document.getElementById("input_correo_repeat")
    );
    //Comprobamos el telefono
    validarTelef(document.getElementById("input_telef"));
    //Si pasa todas las comprobaciones, mostramos el consentimiento
    if (document.getElementById('input_telef').validity.valid) {
        document.getElementById("consentimiento").classList.add("is-visible");
        document.getElementById('conset').setCustomValidity("Debe aceptar o consentemento")
    }
}

//Para el boton de aceptar consentimiento
function aceptarConsentimiento() {
    if (document.getElementById("consent_select").value == 1) {
        document.getElementById("consent_select").setCustomValidity("");
        document
            .getElementById("consentimiento")
            .classList.remove("is-visible");
        form.submit();
    } else {
        window.alert("Debe aceptar el consentimiento para registrarse");
        document
            .getElementById("consent_select")
            .setCustomValidity("Requiere aceptar");
    }

}
//Para el boton de rechazar consentimiento
function rechazarConsentimiento() {
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

    if (fecha.validity.valueMissing){
        fecha.setCustomValidity("La fecha de nacimiento es obligatoria")
    } else if (edad < 18) {
        fecha.setCustomValidity("Debe ser mayor de edad");
    } else {
        //Si es mayor de edad
        fecha.setCustomValidity("");
    }
}

function validarDocumento(tipoDocumento, numDocumento) {
    const dniPattern = /^\d{8}[A-HJ-NP-TV-Z]$/i;
    const niePattern = /^(X|Y|Z)\d{7}[A-HJ-NP-TV-Z]$/;

    if (numDocumento.validity.valueMissing) {
        numDocumento.setCustomValidity("El Nº de documento es obligatorio");
    } else if (tipoDocumento.value == "DNI") {
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
    } else {
        numDocumento.setCustomValidity("");
    }
}

function validarNumSoporte(numSoporte) {
    if (numSoporte.validity.valueMissing) {
        numSoporte.setCustomValidity("El Nº de soporte es obligatorio");
    } else {
        numSoporte.setCustomValidity("");
    }
}

function validarPass(pass, repeat) {
    const passPattern = /.*[!@#%\^&*].*[!@#%\^&*].*/;

    if (pass.validity.valueMissing) {
        pass.setCustomValidity("La contraseña es obligatoria");
    } else if (pass.validity.tooShort) {
        pass.setCustomValidity(
            "La contraseña debe tener al menos 12 caracteres"
        );
    } else if (!passPattern.test(pass.value)) {
        //Si no contiene al menos 2 caracteres especiales, mostramos el error
        document.getElementById("errorPass").innerHTML =
            "La contraseña debe contener al menos 2 caracteres especiales (!@#%^&*).";
        document.getElementById("errorPass").style = "visibility: visible";
        pass.setCustomValidity("Contraseña poco segura")
    } else if (pass.value !== repeat.value) {
        //Si no coinciden, mostramos el error
        document.getElementById("errorPass").innerHTML = "";
        document.getElementById("errorPass").style = "visibility: hidden";
        pass.setCustomValidity("")
        repeat.setCustomValidity("Las contraseñas no coinciden");
    } else {
        //Si coinciden
        document.getElementById("errorPass").innerHTML = "";
        document.getElementById("errorPass").style = "visibility: hidden";
        pass.setCustomValidity("");
        repeat.setCustomValidity("");
    }
}

function validarCorreo(correo, repeat) {
    const emailPattern = /^[a-z]+\w*@[a-z0-9]+\.[a-z]+(\.[a-z]*)*$/iu;

    if (correo.validity.valueMissing) {
        correo.setCustomValidity("El correo es obligatorio");
    } else if (!emailPattern.test(correo.value)) {
        //Si no cumple el patrón, mostramos el error
        correo.setCustomValidity("El correo tiene un formato erróneo.");
    } else if (correo.value !== repeat.value) {
        //Si no coinciden, mostramos el error
        correo.setCustomValidity("");
        repeat.setCustomValidity("Los correos no coinciden.");
    } else {
        correo.setCustomValidity("");
        repeat.setCustomValidity("");
    }
}

function validarTelef(telef) {
    const telefonoPattern = /^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/;

    if (telef.validity.valueMissing) {
        telef.setCustomValidity("El teléfono es obligatorio");
    } else if (!telefonoPattern.test(telef.value)) {
        //Si no cumple el patron, mostramos el error
        telef.setCustomValidity("Formato de teléfono inválido");
    } else {
        //Si lo cumple
        telef.setCustomValidity("");
    }
}
