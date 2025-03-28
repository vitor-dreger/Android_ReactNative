require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

// testando a conexão com o banco
sequelize.authenticate()
    .then(() => console.log('Conexão com o MySQL estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao MySQL:', err));

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
