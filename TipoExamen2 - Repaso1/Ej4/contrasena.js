const pass = "abc123.";

function login() {
    let fieldset = document.getElementById("fieldset");
    let inputPass = document.getElementById("pass").value;
    let label = document.getElementById("labelPass");

    if (inputPass == pass) {
        fieldset.innerHTML = "";
        let mensajeP = document.createElement("p");
        let mensajeText = document.createTextNode("Bienvenido");
        mensajeP.appendChild(mensajeText);
        fieldset.appendChild(mensajeP);
    } else {
        label.innerHTML =
            "Contraseña incorrecta. Vuelva a introducir la contraseña:";
    }
}
