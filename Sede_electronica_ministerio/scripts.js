const form = document.getElementById("formUsuario");
const telefonoInput = document.getElementById("input_telef");

// Expresión regular para validar el formato del teléfono móvil español
const telefonoPattern = /^(?:\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!telefonoPattern.test(telefonoInput.value)) {
        document.getElementById("errorTel").style = "visibility: visible";
        return;
    } else {
        document.getElementById("errorTel").style = "visibility: hidden";
    }

    if (document.getElementById("consentimiento").classList.contains("is-visible")) {
        document.getElementById("consentimiento").focus();
    } else {
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