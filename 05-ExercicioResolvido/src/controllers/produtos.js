const produtos = require("../bancoDedados");

const listarProdutos = (req, res) => {
 return res.status(200).json(produtos);
};

module.exports = { listarProdutos };
