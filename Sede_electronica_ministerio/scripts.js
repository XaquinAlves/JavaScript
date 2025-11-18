const form = document.getElementById("formUsuario");

// Expresión regular para validar el formato del teléfono móvil español
const telefonoPattern = /^(?:\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
const dniPattern = /^\d{8}[A-HJ-NP-TV-Z]$/i;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let check = true;

    if (!dniPattern.test(document.getElementById('input_documento').value)){
        document.getElementById("errorDni").style = "visibility: visible";
        check = false;
    } else {
        document.getElementById("errorDni").style = "visibility: hidden";
    }

    if (!telefonoPattern.test(document.getElementById("input_telef").value)) {
        document.getElementById("errorTel").style = "visibility: visible";
        check = false;
    } else {
        document.getElementById("errorTel").style = "visibility: hidden";
    }

    if (check) {
        document.getElementById("consentimiento").classList.add("is-visible");
    }
});

function aceptarConsentimiento() {
    document.getElementById("consentimiento").classList.remove("is-visible");
    form.submit();
}

function rechazarConsentimiento() {
    alert("Debe aceptar la información básica para continuar con el registro.");
    document.getElementById("consentimiento").classList.remove("is-visible");
}