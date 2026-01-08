let input = document.getElementById("texto");
let bodyTabla = document.getElementById("bodyTabla");
let rowCount = 1;

function agregarFila() {
    if (input.value === "") {
        input.setCustomValidity("Campo en blanco");
    } else {
        input.setCustomValidity("");
        //Creamos la nueva fila
        let nuevaFila = document.createElement("tr");
        //Creamos la nueva celda de texto
        let nuevaCelda = document.createElement("td");
        //Le damos el id correspodiente
        nuevaCelda.id = `fila${rowCount++}`;
        //Creamos el nodo de texto y se lo agregamos
        let texto = document.createTextNode(input.value);
        nuevaCelda.appendChild(texto);
        //Agregamos la celda de texto a la fila
        nuevaFila.appendChild(nuevaCelda);
        //Creamos la celda para el boton
        let celdaBoton = document.createElement("td");
        //Creamos el boton y le añadimos la funcion
        let boton = document.createElement("button");
        boton.onclick = "toCani(`fila${rowCount}`)";
        //Le añadimos el texto al boton
        let textoBoton = document.createTextNode("Caniar");
        boton.appendChild(textoBoton);
        //Añadimos el boton a la celda y la celda a la fila
        celdaBoton.appendChild(boton);
        nuevaFila.appendChild(celdaBoton);
        //Añadimos la fila al body y limpiamos el input
        bodyTabla.appendChild(nuevaFila);
    }
}

let celdas = document.getElementsByTagName("td");
for (let i = 0; i < celdas.length; i++) {
    celdas.item(i).addEventListener("mouseover", function (event) {
        celdas.item(i).style.backgroundColor = "#CCC";
    });
    celdas.item(i).addEventListener("mouseleave", function (event) {
        celdas.item(i).style.backgroundColor = "white";
    });
}

function toCani(cadena) {
    //Obtenemos la cadena original limpia de espacios al principio y al final
    let cadenaOriginal = document.getElementById(cadena).innerHTML.trim();
    //Substituimos ca, co y cu por ka, ko y ku
    let cadenaK = cadenaOriginal.replaceAll(/ca/gi, "ka");
    cadenaK = cadenaK.replaceAll(/co/gi, "ko");
    cadenaK = cadenaK.replaceAll(/cu/gi, "ku");
    cadenaK = cadenaK.replaceAll(/qu/gi, "k");
    //Substituimos ch por x
    let cadenaX = cadenaK.replaceAll(/ch/gi, "x");
    //Pasamos la cadena a un array
    let cadenaArray = cadenaX.split("");
    //Contador para alternar mayuscula/minuscula
    let j = 1;
    //Para cada caracter, si no es un espacio, lo transformamos de acorde al contador j
    for (let i = 0; i < cadenaArray.length; i++) {
        if (cadenaArray[i] != " ") {
            if (j % 2 !== 0) {
                cadenaArray[i] = cadenaArray[i].toUpperCase();
            } else {
                cadenaArray[i] = cadenaArray[i].toLowerCase();
            }
            j++;
        }
    }
    //Volvemos el array a string y le añadimos las tres HHH al finak
    let cadenaFinal = cadenaArray.join("");
    cadenaFinal += "HHH";
    console.log(cadenaFinal)

    return cadenaFinal;
}
