const fs = require("fs");

console.log("start reading a file...");

// leitura de arquivo de forma síncrona
// const a = fs.readFileSync("a.txt").toString();
//console.log(a);

fs.readFile("b.txt", (erro, data) => {
  if (erro) {
    console.log(erro);
  }
  console.log(data.toString());
});

console.log("end reading a file...");
