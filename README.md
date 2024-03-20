# express-crud
A simple crud using express


Tutorial de como executar o projeto:

1 - Configuração do projeto e o node:

a - Baixe o git: https://git-scm.com/download/win;

b - Após ter baixado faça o clone do projeto pra sua máquina usando a linha de terminal do git,
clique com o botão direito do mouse dentro de uma pasta e escolha "git bash here", digite ou cole este comando
git clone https://github.com/LucasRoseira/express-crud.git, mas também pode baixar diretamente pela sua IDE preferida;

c - Faça o download do Node Js aqui: https://nodejs.org/en/download, basicamente irá seguir clicando em next, é bom instlar o chocolatey pra gerenciar pacotes, mas é opcional;

d - Após ter o node instalado vá ao terminal onde baixou o projeto, digite ou cole node -v, é pra aparecer a versão do node.js, no caso a minha é
v20.11.1. 

Se aparecer como comando não existe terá que adicionar manualmente a pasta /bin nas variáveis de ambiente do Windows. 
Segue um tutorial: https://cursos.alura.com.br/forum/topico-o-termo-node-nao-e-reconhecido-como-nome-de-cmdlet-273768
e - Agora abra o projeto na sua IDE favorita, abra um terminal, ou pode abrir o próprio git bash, cole ou digite o comando "npm installl mysql" para instalar o mysql no node e o comando npm install express, express é um framework de js.

2 - Configuração do MySql e  o SGBD(WORWBENCH)

a - Alguns SGBD já vêm com o MySql embutido, mas se não vier terá que baixar a parte.
Baixe o Workbench em https://downloads.mysql.com/archives/workbench/ 
A minha versão é a 8.0.36 mas fique a vontade para escolher a versão que deseja.

b - Após ter baixado siga o passo a passo da instalação, no mais terá que setar um usuário e senha, lembre-se dessa senha; se precisar siga um tutorial de como instalar;

c - Verifique se o processo do mysql (não o processo do Workbench) está executando ou tente abrir uma conexão com o banco de dados local, se não funcionar siginifca que terá que instalar e executar o mysql; Após ter baixado e instalado verifique se o processo mysql foi iniciado,

d - Importe o banco de dados que está na pasta banco de dados, basta executar o sql no workbench;

3 - Configuração do Postman

a - Baixe o postman aqui: https://www.postman.com/downloads/

b - Instale o postman fazendo login nele ou não;

c - Baixe e importe para o postman. A collection que está junto com o projeto, na pasta "collection".

4 - Executar o projeto e testar as requisições

a - Execute no terminal o comando:  node app.js é para ser aberto uma aba do navegador com o seguinte link:
e no terminal aparecerá: Server is running on port 3000
Obs: o servidor precisa ser executado para testar as requisições.

b - agora pelo postman você pode usar tanto a collection importada para testar quanto criar a sua própria: basicamente você usará as rotas

- Selecionar um único produto:
http://localhost:3000/api/get/{id_produto} - ID será um parâmetro

- Selecionar todos os produtos: 
http://localhost:3000/api/get/

- Cadastrar um produto:
http://localhost:3000/api/cadastrar/
Obs: Para cadastrar o produto terá que enviar no corpo o json com os dados, exemplo:

{
  "nome_produto": "Regata",
  "descricao": "Regata Adidas",
  "valor": 59.99,
  "quantidade_estoque": 700
}


- Alterar um produto
http://localhost:3000/alterar/

Obs: mesma ideia do cadastrar, muda que enviará o ID para usar na cláusula where, exemplo:
{
  "id_produto": 4,
  "nome_produto": "Tenis",
  "descricao": "Tenis Nike Infantil Esportivo",
  "valor": 99.99,
  "quantidade_estoque": 25
}

- Deletar um produto
http://localhost:3000/api/deletar/9

Obs: mesma ideia do selecionar único, o ID do produto será passado como parâmetro para na url
