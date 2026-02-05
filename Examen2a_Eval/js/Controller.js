class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.form = document.getElementById("productForm");
        this.productos;

        this.init();
    }

    async init() {
        try {
            this.productos = await this.model.cargaInicial();
            this.view.vaciarGrid();
            this.view.mostrarProductos(this.productos);
        } catch (error) {
            console.error(error);
            this.view.mostrarError();
        }
    }

    async borrarProducto(id) {
        try {
            const result = this.model.borrarProducto(id);
            const cardProducto = document.querySelector(`[data-id='${id}']`);
            if (result) {
                this.view.mostrarMensaje("Producto eliminado correctamente");
                cardProducto.remove()
            } else {
                this.view.mostrarWarning("No se ha podido borrar el producto");
            }
        } catch (error) {
            console.error(error);
            this.view.mostrarError();
        }
    }

    setProducto(producto) {
        if (producto.id) {
            return this.ejecutarRequest(
                this.apiUrl + `/${producto.id}`,
                "put",
                producto,
            );
        } else {
            return this.ejecutarRequest(this.apiUrl, "post", producto);
        }
    }

    prepararAlta() {
        document.getElementById("prod-id").value = "";
        document.getElementById("prod-title").value = "";
        document.getElementById("prod-price").value = "";
        document.getElementById("prod-category").value = "";
        document.getElementById("prod-image").value = "";

        document
            .getElementById("btn-save")
            .addEventListener("click", function (event) {
                const producto = new Producto(
                    null,
                    document.getElementById("prod-title"),
                    document.getElementById("prod-price"),
                    document.getElementById("prod-category"),
                    document.getElementById("prod-image"),
                );

                const resultado = app.setProducto(producto);
                if (resultado) {
                    app.view.mostrarMensaje("Producto insertado correctamente");
                } else {
                    app.view.mostrarWarning("No se pudo insertar el producto");
                }
                app.view.cerrarModal();
            });
    }

    async prepararEdicion(id) {
        try {
            let producto = await this.model.cargarProducto(id);

            document.getElementById("prod-id").value = producto.id;
            document.getElementById("prod-title").value = producto.title;
            document.getElementById("prod-price").value = producto.price;
            document.getElementById("prod-category").value = producto.category;
            document.getElementById("prod-image").value = producto.image;
            this.view.abrirModal();

            document
                .getElementById("btn-save")
                .addEventListener("click", function (event) {
                    producto = new Producto(
                        document.getElementById("prod-id").value,
                        document.getElementById("prod-title").value,
                        document.getElementById("prod-price").value,
                        document.getElementById("prod-category").value,
                        document.getElementById("prod-image").value,
                    );
                    const resultado = app.setProducto(producto);
                    if (resultado) {
                        app.view.mostrarMensaje(
                            "Producto modificado correctamente",
                        );
                    } else {
                        app.view.mostrarWarning(
                            "No se pudo modificar el producto",
                        );
                    }
                    app.view.cerrarModal();
                });
        } catch (error) {
            console.error(error);
            app.view.mostrarError;
        }
    }

    buscarProducto(texto) {
        const titulo = texto.toLowerCase();
        let productosFiltrados = this.productos.filter(function (producto) {
            if (producto.title.toLowerCase().includes(texto)) {
                return true;
            } else {
                return false;
            }
        });

        (this.view.vaciarGrid(),
            this.view.mostrarProductos(productosFiltrados));
    }

    filtrarCategoria(categoria) {
        let productosFiltrados = this.productos.filter(function (producto) {
            if (categoria == "all") {
                return true;
            } else if (producto.category == categoria) {
                return true;
            } else {
                return false;
            }
        });
        console.log(productosFiltrados);
        this.view.vaciarGrid();
        this.view.mostrarProductos(productosFiltrados);
    }

    async ejecutarRequest(url, metodo, datos) {
        const respuesta = await fetch(url, {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
                "Content.type": "aplication/json; charset=UTF_8;",
            },
        });
        return respuesta.ok;
    }
}

const app = new Controller(new View(), new Model());

document
    .getElementById("btn-open-modal")
    .addEventListener("click", function (event) {
        app.prepararAlta();
    });

document
    .getElementById("filter-cat")
    .addEventListener("change", function (event) {
        app.filtrarCategoria(document.getElementById("filter-cat").value);
    });

document
    .getElementById("btnBuscar")
    .addEventListener("click", function (event) {
        app.buscarProducto(document.getElementById("search").value);
    });

document.getElementById("search").addEventListener("input", function (event) {
    app.buscarProducto(document.getElementById("search").value);
});
