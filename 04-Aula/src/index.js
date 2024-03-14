const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  await fs.writeFile("./src/b.txt", "Hello World 2");
  res.json({ message: "Hello World" });
});

app.post("/", async (req, res) => {
  const { name, age } = req.body;
  try {
    const teste = await fs.readFile("./src/usuarios.json");
    const pessoas = JSON.parse(teste);
    pessoas.push({ name, age });
    await fs.writeFile("./src/usuarios.json", JSON.stringify(pessoas));
    res.json({ name, age });
  } catch (error) {
    res.json({ message: "Erro ao salvar" });
  } finally {
    console.log("Finalizado");
  }
});

app.listen(3000, () => {
  console.log("API started");
});
