class View {
    constructor() {
        this.grid = document.getElementById("grid");
        this.errorContainer = document.getElementById("error-container");
        this.bsModal = new bootstrap.Modal(
            document.getElementById("productModal"),
        );
    }

    mostrarProductos(productos) {
        this.vaciarGrid();
        productos.forEach((producto) => {
            const card = `<div class="col item-p" data-id="${producto.id}">
                <div class="card h-100 card-product shadow-sm">
                    <div class="img-box p-3 text-center">
                        <img src="${producto.image}" alt="${producto.title}" style="max-height: 120px; width: auto;">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span class="category-badge mb-2 d-inline-block text-uppercase">${producto.category}</span>
                        <h6 class="fw-bold product-name">${producto.title}</h6>
                        <p class="text-primary fw-bold fs-5 mt-auto">$ ${producto.price}</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-outline-secondary btn-sm flex-grow-1 btn-edit" onclick="app.prepararEdicion(${producto.id})">Editar</button>
                            <button class="btn btn-outline-danger btn-sm btn-delete" onclick="app.borrarProducto(${producto.id})" >Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>`;
            this.grid.innerHTML += card;
        });
    }

    mostrarError() {
        this.errorContainer.innerHTML = '';
        const divError = document.createElement('div');
        divError.classList.add('alert', 'alert-danger');
        divError.textContent = "Se ha producido un error con la API";
        this.errorContainer.appendChild(divError);
    }

    mostrarMensaje(mensaje) {
        this.errorContainer.innerHTML = "";
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("alert", "alert-success");
        divMensaje.textContent = mensaje;
        this.errorContainer.appendChild(divMensaje);
    }

    mostrarWarning(mensaje) {
        his.errorContainer.innerHTML = "";
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("alert", "alert-warning");
        divMensaje.textContent = mensaje;
        this.errorContainer.appendChild(divMensaje);
    }

    vaciarGrid() {
        this.grid.innerHTML = ``;
        this.errorContainer.innerHTML = "";
    }

    abrirModal() {
        this.bsModal.show();
    }

    cerrarModal() {
        this.bsModal.hide();
    }
}
