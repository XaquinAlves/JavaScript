const API_URL = "https://jsonplaceholder.typicode.com/users";
const tablaUsuarios = document.getElementById("tabla-usuarios");
const tbodyUsuarios = document.getElementById("usuarios-tbody");

// TODO: Obtener y mostrar usuarios
async function fetchUsers() {
    // Tu código aquí...
    try {
        const respuesta = await fetch(API_URL);
        const usuarios = await respuesta.json();
        vaciarTabla(tablaUsuarios, tbodyUsuarios);
        usuarios.forEach((usuario) => {
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            let celdaEmail = document.createElement("td");

            celdaNombre.textContent = usuario.name;
            celdaEmail.textContent = usuario.email;

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaEmail);
            tbodyUsuarios.appendChild(fila);
        });
        tablaUsuarios.style.display = "revert";
    } catch (error) {
        console.error("Error cargando usuarios: ", error.message);
    }
}

// TODO: Crear nuevo usuario
async function createUser(data) {
    // Tu código aquí...
    try {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                username: data.username,
                email: data.email,
                address: data.address,
                phone: data.phone,
                website: data.website,
                company: data.company
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        console.error("Error al guardar el usuario: ", error.message);
    }
}

// TODO: Borrar usuario por ID
async function deleteUser(id) {
    // Tu código aquí...
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    fetch(API_URL + `/${id}`, options).then(response => {
        if (!response.ok) {
            throw new Error("La respuesta de la red no fue correcta");
        }
        console.log("Recurso eliminado correctamente");
    }).catch(error => {
        console.error(
            "Hubo un problema con la solicitud DELETE:",
            error.message,
        );
    })
}

function vaciarTabla(tabla, tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    tabla.style.display = "none";
}

// Ventana modal
const modal = document.getElementById("modalPost");
// Botón que abre el modal
const boton = document.getElementById("abrirPost");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click", function () {
    modal.style.display = "block";
});
// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
