const { or } = require('sequelize');
const ProductModel = require("../models/productModel")

async function createProduct(data) {
    try {
        const { name, description, image, price, currency, stock, unit, publishedOn } = data;

        const newProduct = await ProductModel.create({
            name, description, image, price, currency, stock, unit, publishedOn
        });

        return newProduct;
    } catch (error) {
        throw error;
    }
}

async function updateProduct(productId, data) {
    try {
        const product = await ProductModel.findByPk(productId);

        if (!product) {
            throw new Error('Producto no encontrado');
        }
        const updatedProduct = await product.update(data);

        return updatedProduct;
    } catch (error) {
        throw new Error('Error al actualizar el producto con id ' + productId);
    }
}

async function getProductById(product) {
    try {
        const getProduct = await ProductModel.findByPk(product);

        return getProduct;
    } catch (error) {
        throw new Error('Error al obtener el producto con id ' + product + ' desde la base de datos');
    }
}

async function getAllProducts() {
    try {
        const allProducts = await ProductModel.findAll({
            order: [['name', 'ASC']],
        });
        return allProducts;
    } catch (error) {
        throw new Error('Error al obtener todos los productos desde la base de datos');
    }
}



module.exports = {
    createProduct,
    updateProduct,
    getProductById,
    getAllProducts,
};