// These routes define the RESTful endpoints for managing products.
const { Op } = require('sequelize'); // Import Op for search
const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// GET /products - Get a list of all products with pagination and search
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10, search } = req.query;

        const options = {
            limit: parseInt(limit), // Number of products per page
            offset: (page - 1) * limit // Skip the previous pages
        };

        // If a search query is provided, add a filter
        if (search) {
            options.where = {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${search}%` } }, // Case-insensitive search by name
                    { category: { [Op.iLike]: `%${search}%` } } // Case-insensitive search by category
                ]
            };
        }

        // Fetch products with pagination and search options
        const products = await Product.findAndCountAll(options);

        // Response with pagination details
        res.json({
            totalItems: products.count,
            totalPages: Math.ceil(products.count / limit),
            currentPage: parseInt(page),
            products: products.rows
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

// POST /products - Add a new product
router.post('/', async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        if (!name || !price || !category) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const product = await Product.create({ name, price, description, category });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /products - Get a list of all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /products/:id - Get details of a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /products/:id - Update an existing product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const { name, price, description, category } = req.body;
        if (!name || !price || !category) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await product.update({ name, price, description, category });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /products/:id - Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
