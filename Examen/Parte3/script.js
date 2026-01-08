function bloquearContenido() {
    //RegEx para encontrar la palabra a bloquear
    let patronBloqueo = /sexo/gi;
    //RegEx para encontrar la palabra examen
    let patronExamen = /examen/gi;
    //Cogemos el body
    let body = document.getElementById("body");
    //Para cada nodo hijo del body
    body.childNodes.forEach(function (childNode) {
        //Si tiene hijos y su primer hijo no es null
        if (childNode.hasChildNodes && childNode.firstChild != null) {
            //comprobamos si contiene la palabra censurada
            if (childNode.firstChild.nodeValue.match(patronBloqueo)) {
                //Creamos el parrafo de contenido bloqueado, le añadimos el texto y el estilo
                let aviso = document.createElement("p");
                let textoAviso = document.createTextNode("Contenido bloqueado");
                aviso.appendChild(textoAviso);
                aviso.style.fontWeight = "bold";
                //Cambiamos el nodo con el texto por el de contenido bloqueado
                childNode.replaceWith(aviso);
            } else if (childNode.firstChild.nodeValue.match(patronExamen)) {
                //Si detecta la palabra examen, lanza una alerta y pone el nodo padre de la palabra por consola
                window.alert("¡DETECTADO!");
                console.log(childNode);
            }
        }
    });
}
