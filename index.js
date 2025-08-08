const { Person } = require("./person.js");

// // // require("./modules/path.js");[

// require("./modules/fs.js");

require("./modules/http.js");
const person = new Person("Yanzom");

console.log(person.sayMyName()); // My name is Yanzom!
