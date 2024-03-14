const fs = require("fs/promises");
const { produtos } = require("../bancoDedados");

const registrarVenda = async (req, res) => {
  const { produto_id, quantidade } = req.body;
  const produto = produtos.find((p) => p.id === Number(produto_id));
  if (!produto) {
    return res.status(404).send({ erro: "Produto não encontrado" });
  }
  try {
    const vendas = await fs.readFile("./src/vendas.json");
    const vendasAtualizadas = JSON.parse(vendas);

    vendasAtualizadas.vendas.push({
      produto,
      quantidade,
    });

    await fs.writeFile("./src/vendas.json", JSON.stringify(vendasAtualizadas));
    return res.status(201).send({ mensagem: "Venda registrada com sucesso" });
  } catch (error) {
    return res.status(500).send({ erro: "Erro ao registrar venda" });
  }
};

module.exports = { registrarVenda };
