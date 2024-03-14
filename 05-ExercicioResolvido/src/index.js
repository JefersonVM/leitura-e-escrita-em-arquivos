const express = require("express");

const { listarProdutos } = require("./controllers/produtos");
const { registrarVenda } = require("./controllers/vendas");

const app = express();

app.use(express.json());

app.get("/produtos", listarProdutos);

app.post("/produtos", registrarVenda);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
