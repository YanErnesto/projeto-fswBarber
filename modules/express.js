const express = require('express')
const UserModel = require('../src/models/user.model')
const app = express()
app.use(express.json());

app.get('/home', (req, res) => {
  res.contentType("Application/Html");
  res.status(200).send("<h1>Ola isso aqui é com express</h1>");
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

const port = 8080;

app.listen(port, () => console.log(`voce está rodando na porta ${port} com express`));

//O mongoose é a lib responsavel por fazeer as operações e integração com o bd
