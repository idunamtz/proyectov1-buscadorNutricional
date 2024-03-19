const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Ruta para buscar alimentos
router.post('/search', foodController.searchFood);

module.exports = router;
