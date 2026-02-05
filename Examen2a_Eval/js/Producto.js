class Producto {
    constructor(id, title, price, category, image) {
        if (typeof parseFloat(price) !== 'number') {
            throw new Error('El precio debe ser numerico');
        }
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}