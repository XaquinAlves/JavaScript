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
        usuarios.forEach(usuario => {
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement('td');
            let celdaEmail = document.createElement('td');

            celdaNombre.textContent = usuario.name;
            celdaEmail.textContent = usuario.email;

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaEmail);
            tbodyUsuarios.appendChild(fila);
        });
        tablaUsuarios.style.display = "revert"
    } catch (error) {
        console.error("Error cargando usuarios: ", error);
    }
}

// TODO: Crear nuevo usuario
async function createUser(data) {
    // Tu código aquí...
}

// TODO: Borrar usuario por ID
async function deleteUser(id) {
    // Tu código aquí...
}

function vaciarTabla(tabla, tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    tabla.style.display = "none";
}