const fsPromisses = require("fs/promises");
const fs = require("fs");

console.log("start reading a file...");

// const a = fsPromisses.readFile("a.txt");

// a.then((data) => {
//   console.log(data.toString());
// });

// a.catch((erro) => {
//   console.log(erro);
// });

(async function(){
    try {
        const data = await fsPromisses.readFile("a.txt");
        console.log(data.toString());
    } catch (erro) {
        console.log(erro);
    }
})();

console.log("end reading a file...");
