require("dotenv").config(); // biblioteca que vai gerenciar variaveis ambientes de um projeto

const port = process.env.PORT;

const express = require("express");

const app = express();

app.listen(port);

console.log("Backend rodando");