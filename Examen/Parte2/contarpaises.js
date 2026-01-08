// Lista de paises almacenados
const PAISES = ["España", "Francia", "Italia", "Alemania", "Portugal", "Malta"];

// Devuelve la cantidad de paises almacenados
function contarPaises() {
    return PAISES.length;
}

// Devuelve la lista de paises almacenada invertida, sin modificar la original
function inversa() {
    //Creamos una copia para no modificar la original
    let copiaPaises = [...PAISES];
    //La devolvemos invertida
    return copiaPaises.reverse();
}

//Guarda un pais en la lista, devuelve la cantidad de paises almacenados tras la operación
function agregarPais(nuevoPais) {
    PAISES.push(nuevoPais);
    return PAISES.length;
}

//Quita el primer país de la lista, devuelve el nombre del país quitado
function bajaPais() {
    return PAISES.shift();
}

//Devuelve una lista de objetos del tipo {nombre: nombre_del_pais, longitud: num_caracteres:nombre} con el array pasado como parametro
function formatearPaíses(array) {
    return array.map(function (pais) {
        return {nombre: pais, longitud: pais.length}
    });
}

//Devuelve una lista con los elementos de la lista pasada como parámetro que empiecen por vocal, mayuscula o minuscula
function filtrarPaises(array) {
    //RegEx para comprobar que empieza por vocal
    let vocales = /^[aeiou]/i
    return array.filter(function (pais) {
        //Si pasa el RegExp, lo añadimos a la nueva lista
        if (vocales.test(pais)) {
            return pais;
        }
    });
}

console.log(contarPaises());

console.log(inversa());
console.log(PAISES);

console.log(agregarPais('Perú'));
console.log(PAISES);

console.log(bajaPais());
console.log(PAISES);

console.log(formatearPaíses(PAISES));
console.log(PAISES);

console.log(filtrarPaises(PAISES));
console.log(PAISES);