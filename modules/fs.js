//Manipular sistema de arquivos, ler e etc

const fs = require("fs");
const path = require("path");

//Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   return error
//     ? console.error("erro:", error)
//     : console.log("Pasta criada com sucesso!");
// });

//Cria um arquivo com conteudo nele
// fs.writeFile(
//   path.join(__dirname, "/test", "text.txt"),
//   "Hello word",
//   (error) => {
//     return error
//       ? console.error("erro:", error)
//       : console.log("Arquivo criado com sucesso!");
//   }
// );

//Se o arquivo ja existe ele substitui o que ta escrito por inteiro, pois tem uma sequencia
fs.writeFile(
  path.join(__dirname, "/test", "text.txt"),
  "Hello baby ",
  (error) => {
    if (error) {
      return console.error("erro:", error);
    }
    console.log("Arquivo modificado com sucesso");

    //Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "text.txt"),
      "Hello baby3",
      (error) => {
        return error
          ? console.log("erro", error)
          : console.log("Adicionado conteudo ao arq");
      }
    );

    //Ler um arquivo
    //Recebe erro e data
    fs.readFile(
      path.join(__dirname, "/test", "text.txt"),
      "utf8",
      (error, data) => {
        return error
          ? console.error("erro:", error)
          : console.log(data.toString());
      }
    );
  }
);
