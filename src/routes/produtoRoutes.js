const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Defina as rotas
router.post('/cadastrar', produtoController.cadastrarProduto); 
router.post('/alterar', produtoController.alterarProduto); 
router.delete('/deletar/:id_produto', produtoController.deletarProduto); 
router.get('/get/:id_produto', produtoController.getProdutoById); 
router.get('/getAll', produtoController.getAllProdutos); 

module.exports = router;
