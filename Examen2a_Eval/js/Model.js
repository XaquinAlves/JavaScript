class Model {
    constructor() {
        this.urlBase = "https://fakestoreapi.com/products/";
    }

    async cargaInicial() {
        const response = await fetch(this.urlBase);
        return await response.json();
    }

    async borrarProducto(id) {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        const response = await fetch(this.urlBase + `/${id}`, options);
        return response.ok;
    }

    async cargarProducto(id) {
        const response = await fetch(this.urlBase + id);
        return await response.json();
    }
}