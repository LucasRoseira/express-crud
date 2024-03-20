const express = require('express');
const bodyParser = require('body-parser');
const produtoRoutes = require('./src/routes/produtoRoutes'); // Verifique se o caminho está correto
const app = express();

app.use(bodyParser.json());

// Use as rotas do produto
app.use('/api', produtoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
