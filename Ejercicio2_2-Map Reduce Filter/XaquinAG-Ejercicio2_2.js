const PAISES = [
    {
        nombre: "España",
        capital: "Madrid",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Francia",
        capital: "París",
        continente: "Europa",
        moneda: "Euro",
    },
    { nombre: "Italia", capital: "Roma", continente: "Europa", moneda: "Euro" },
    {
        nombre: "Alemania",
        capital: "Berlín",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Portugal",
        capital: "Lisboa",
        continente: "Europa",
        moneda: "Euro",
    },
    {
        nombre: "Marruecos",
        capital: "Rabat",
        continente: "África",
        moneda: "Dírham",
    },
    {
        nombre: "Suiza",
        capital: "Berna",
        continente: "Europa",
        moneda: "Franco Suízo",
    },
];

function resumenPaises(array) {
    return array.map((pais) => {
        let objetoPais = {};
        objetoPais.codigo = pais.nombre.substring(0, 3).toUpperCase();
        objetoPais.info = `${pais.nombre} (${pais.capital})`;
        objetoPais.tieneEuro = pais.moneda === "Euro";
        return objetoPais;
    });
}

function filtrarPorCriterios(array, criterios) {
    return array.filter((pais) => {
        let check = true;
        if (criterios.hasOwnProperty("continente")) {
            check = criterios.continente === pais.continente;
        }

        if (check && criterios.hasOwnProperty("moneda")) {
            check = criterios.moneda === pais.moneda;
        }

        if (check && criterios.hasOwnProperty("minLetrasCapital")) {
            check = pais.capital.length >= criterios.minLetrasCapital;
        }
        return check;
    });
}

function estadisticasContinentes(array) {
    return array.reduce((acc, pais) => {
        if (acc.hasOwnProperty(pais.continente)) {
            acc[pais.continente].total += 1;
            if (!acc[pais.continente].monedas.includes(pais.moneda)) {
                acc[pais.continente].monedas.push(pais.moneda);
            }
            acc[pais.continente].paises.push(pais.nombre);
        } else {
            acc[pais.continente] = {};
            acc[pais.continente].total = 1;
            acc[pais.continente].monedas = [pais.moneda];
            acc[pais.continente].paises = [pais.nombre];
        }
        return acc;
    }, {});
}

function informeCapitales(array)
{
    return array.filter((pais) => {
        return pais.capital.length > 4;
    }).map((pais) => {
        return `La capital de ${pais.nombre} es ${pais.capital} y tiene ${pais.capital.length} letras`
    })
}

console.log(resumenPaises(PAISES));
console.log(filtrarPorCriterios(PAISES, { continente: "Europa" }));
console.log(filtrarPorCriterios(PAISES, { moneda: "Dírham" }));
console.log(filtrarPorCriterios(PAISES, { minLetrasCapital: 6 }));
console.log(
    filtrarPorCriterios(PAISES, {
        continente: "Europa",
        moneda: "Euro",
        minLetrasCapital: 5,
    })
);
console.log(estadisticasContinentes(PAISES));
console.log(informeCapitales(PAISES));