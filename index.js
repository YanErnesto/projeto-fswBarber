const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/connect")

dotenv.config(); //possibilita utilizar a val de ambiente

//1°forma
connectToDataBase();

require("./modules/express.js")

//2°forma
// (async () => {
//   await connectToDataBase();
// })();

// teste de importação 1
// require("./modules/path.js");

// teste de importação 2
// require("./modules/fs.js");

// teste de importação 3
// require("./modules/http.js");

// teste de importação 4
// const person = new Person("Yanzom");

// teste de importação classe
// console.log(person.sayMyName()); // My name is Yanzom!
