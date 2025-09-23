console.info(document);
document.getElementById("prueba").innerHTML = "Aquí si funciona";
function cambiarTexto() {
    console.warn("Cambiando texto");
    document.getElementById("prueba").innerHTML = "Otro texto";
}

function cambiaTamano() {
    console.warn("Cambia tamaño");
    document.getElementById("p1").style.fontSize = "10px";
}

function cambiaImagen() {
    var imagen = document.getElementById("myImg");
    if (imagen.src.match("green")) {
        imagen.src =
            "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg";
    } else {
        imagen.src =
            "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg";
    }
}
