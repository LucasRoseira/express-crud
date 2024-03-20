const dbConnection =  require('../services/database'); // Importa a conexão com o banco de dados


// Função para lidar com erros de conexão com o banco de dados
function handleDatabaseConnectionError(err, res) {
  if (err) {
    console.error('Erro ao obter conexão do banco de dados:', err);
    res.status(500).send('Erro interno do servidor');
    return true;
  }
  return false;
}

// Função para lidar com erros internos de consultas SQL
function handleInternalSQLError(err, res) {
  if (err) {
    console.error('Erro ao executar a consulta SQL:', err);
    res.status(500).send('Erro interno do servidor');
    return true;
  }
  return false;
}

// Métodos modificados para usar as rotas definidas no produtoRoutes.js

// Rota para obter todos os produtos
function getAllProdutos(req, res) {
  dbConnection.query('SELECT * FROM produtos', (err, results) => {
    if (handleInternalSQLError(err, res)) return;

    if (results.length === 0) {
      res.status(404).send('Nenhum produto encontrado');
      return;
    }

    res.json(results);
  });
}

// Rota para obter um produto por ID
function getProdutoById(req, res) {
  const id_produto = req.params.id_produto;

  dbConnection.query('SELECT * FROM produtos WHERE id_produto = ?', [id_produto], (err, results) => {
    if (handleInternalSQLError(err, res)) return;

    if (results.length === 0) {
      res.status(404).send('Produto não encontrado');
      return;
    }

    res.json(results[0]);
  });
}

// Rota de cadastro de produto
function cadastrarProduto(req, res) {
  const dadosProduto = req.body;

  if (!dadosProduto) {
    return res.status(400).json({ error: 'Dados do produto não fornecidos' });
  }

  const { nome_produto, descricao, valor, quantidade_estoque } = dadosProduto;

  if (!nome_produto || !descricao || !valor || !quantidade_estoque) {
    return res.status(400).json({ error: 'Campos do produto incompletos' });
  }

  const sql = `INSERT INTO produtos (nome_produto, descricao, valor, quantidade_estoque) VALUES (?, ?, ?, ?)`;

  dbConnection.query(sql, [nome_produto, descricao, valor, quantidade_estoque], (err, results) => {
    if (handleInternalSQLError(err, res)) return;

    return res.json(results);
  });
}

// Rota de alteração de produto
function alterarProduto(req, res) {
  const dadosProduto = req.body;

  if (!dadosProduto) {
    return res.status(400).json({ error: 'Dados do produto não fornecidos' });
  }

  const { id_produto, nome_produto, descricao, valor, quantidade_estoque } = dadosProduto;

  const sql = `UPDATE produtos SET nome_produto = ?, descricao = ?, valor = ?, quantidade_estoque = ? WHERE id_produto = ?`;

  dbConnection.query(sql, [nome_produto, descricao, valor, quantidade_estoque, id_produto], (err, results) => {
    if (handleInternalSQLError(err, res)) return;

    return res.json(results);
  });
}

// Rota de exclusão de produto
function deletarProduto(req, res) {
  const id_produto = req.params.id_produto;

  if (!id_produto) {
    return res.status(400).json({ error: 'ID do produto não fornecido' });
  }

  const sql = `DELETE FROM produtos WHERE id_produto = ?`;

  dbConnection.query(sql, [id_produto], (err, results) => {
    if (handleInternalSQLError(err, res)) return;

    return res.json(results);
  });
}

module.exports = {
  getAllProdutos,
  getProdutoById,
  cadastrarProduto,
  alterarProduto,
  deletarProduto
};
