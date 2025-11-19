const form = document.getElementById("formUsuario");

// Expresión regular para validar el formato del teléfono móvil español
const telefonoPattern = /^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/;
const dniPattern = /^\d{8}[A-HJ-NP-TV-Z]$/i;
const emailPattern = /^[a-z]+\w*@[a-z0-9]+\.[a-z]+(\.[a-z]*)*$/iu;

//Event listener para checkear el formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); //Detiene el envío del formulario
    let check = true;

    //Comprobamos el DNI
    if (!dniPattern.test(document.getElementById('input_documento').value)){//Si no cumple el patron, mostramos el error
        document.getElementById("errorDni").innerHTML = "Número de documento no válido."
        document.getElementById("errorDni").style = "visibility: visible";
        check = false;
    } else { //Si es correcto
        document.getElementById("errorDni").innerHTML = ""
        document.getElementById("errorDni").style = "visibility: hidden";
    }

    //Comprobamos las contraseñas
    if (document.getElementById('input_pass').value !== document.getElementById('input_pass_repeat').value){//Si no coinciden, mostramos el error
        document.getElementById("errorPass").innerHTML = "Las contraseñas no coinciden."
        document.getElementById('errorPass').style = "visibility: visible";
        check = false;
    } else { //Si coinciden
        document.getElementById("errorPass").innerHTML = ""
        document.getElementById('errorPass').style = "visibility: hidden";
    }

    //Comprobamos los correos
    if (!emailPattern.test(document.getElementById('input_correo').value)){//Si no cumple el patrón
        document.getElementById("errorEmail").innerHTML = "El correo tiene formato erróneo."
        document.getElementById('errorEmail').style = "visibility: visible";
        check = false;
    } else if (document.getElementById('input_correo').value !== document.getElementById('input_correo_repeat').value){//Si no coinciden, mostramos el error
        document.getElementById("errorEmail").innerHTML = "Los correos no coinciden."
        document.getElementById('errorEmail').style = "visibility: visible";
        check = false;
    } else {
        document.getElementById("errorEmail").innerHTML = ""
        document.getElementById('errorEmail').style = "visibility: hidden";
    }

    //Comprobamos el telefono
    if (!telefonoPattern.test(document.getElementById("input_telef").value)) { //Si no cumple el patron, mostramos el error
        document.getElementById("errorTel").innerHTML = "Formato de teléfono no válido."
        document.getElementById("errorTel").style = "visibility: visible";
        check = false;
    } else { //Si lo cumple
        document.getElementById("errorTel").innerHTML = ""
        document.getElementById("errorTel").style = "visibility: hidden";
    }

    //Si pasa todas las comprobaciones, mostramos el consentimiento
    if (check) {
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