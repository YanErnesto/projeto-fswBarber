const express = require('express')
const UserModel = require('../src/models/user.model')
const app = express()
app.use(express.json());

app.set("view engine", "ejs")
app.set("views", "src/views")

//Isso é um middleware
// Middleware é uma função que executa algo entre a requisição e a 
// resposta antes de chegar no endpoint, isso intercepta qualquer requisição, 
// se o next não for chamado ele não vai para o endpoint
app.use((req, res, next) =>{
  console.log("Middleware")
  console.log(`request type: ${req.method}`)
  console.log(`content type: ${req.headers['content-type']}`)

  console.log(req.body)
  next()
})
app.get('/home', (req, res) => {
  res.contentType("Application/Html");
  res.status(200).send("<h1>Ola isso aqui é com express</h1>");
})

app.get('/views/users', async (req, res) =>{
  const users = await UserModel.find({});

  res.render("index", {users})
})

app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users)

  } catch (error) {

    return res.status(500).send(error.message);

  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const users = await UserModel.findById(id);

    res.status(200).json(users)

  } catch (error) {

    return res.status(500).send(error.message);

  }
})

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message)
  }

})

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // esse user mesmo atualizando o metodo retorna o registro antigo, agora com o new: true ele exibe o atualizado
    const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

    res.status(200).json(user)

  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.delete("/users/:id", async(req, res) =>{
  try{
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id)

    if(!user){
      return res.status(404).send("User not found")
    }

    res.status(200).json(user)

  }
  catch(error){
    return res.status(500).send(error.message)
  }
})

const port = 8080;

app.listen(port, () => console.log(`voce está rodando na porta ${port} com express`));

//O mongoose é a lib responsavel por fazeer as operações e integração com o bd
