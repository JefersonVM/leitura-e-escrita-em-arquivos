const fs = require("fs/promises");

(async function () {
  const arquivoJson = await fs.readFile("teste.json");

  const pessoas = JSON.parse(arquivoJson);

  pessoas.push({ nome: "Maria", idade: 23 });

  const arrayJson = JSON.stringify(pessoas);

  console.log(arrayJson);
})();
