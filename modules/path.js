const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo atual
console.log(path.extname(__filename));

//Criar um obj path
const pathObj = path.parse(__filename);
console.log(pathObj);

//Juntar caminhos
// const newPath = path.join(__dirname, "modules", "seupai.txt", "path.js");
// console.log(newPath);

console.log(path.join(__dirname, "modules", "seupai.txt", "path.js"));
