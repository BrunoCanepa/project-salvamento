const ProductService = require('../services/productService.js');

async function getAllProducts(req, res) {
    try {
        const products = await ProductService.getAllProducts();
        if (products.length > 0) {
            return res.status(200).json(products);
        } else {
            return res.status(204).json({ message: 'No hay Productos' });
        }
    } catch (error) {
        return res.status(404).json({ message: 'Error al obtener los productos', error: error.message });
    }
}

async function getProductById(req, res) {
    const productId = req.params.productId;

    try {
        const product = await ProductService.getProductById(productId);
        if (product) {
            return res.status(200).json(product);
        } else {
            return res.status(204).json({ message: 'No hay Productos' });
        }
    } catch (error) {
        return res.status(404).json({ message: 'Error al obtener el producto', error: error.message });
    }
}

async function createProduct(req, res) {
    try {

        const { name, description, image, price, currency, stock, unit, publishedOn } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        }

        const newProduct = await ProductService.createProduct({
            name, description, image, price, currency, stock, unit, publishedOn
        });

        if (newProduct) {
            return res.status(201).json(newProduct);
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto', error: error.message });
    }
}

async function updateProduct(req, res) {
    const productId = req.params.productId;
    const data = req.body;

    try {
        const updatedProduct = await ProductService.updateProduct(productId, data);
        if (updatedProduct) {
            return res.status(200).json(updatedProduct);
        } else {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Error al actualizar el producto', error: error.message });
    }
}

module.exports = {
    getProductById,
    getAllProducts,
    createProduct,
    updateProduct
};