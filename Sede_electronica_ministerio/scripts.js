let form = document.getElementById("formUsuario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
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