const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const mysql = require('mysql');

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: 'Kratos_7o5n',
  database: 'produtos'
};

const dbConnection = mysql.createConnection(dbOptions);

module.exports = dbConnection;