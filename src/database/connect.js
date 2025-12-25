const mongoose = require("mongoose")

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterappbarber.zckk4ug.mongodb.net/appBarber?retryWrites=true&w=majority&appName=ClusterAppBarber`
    );
    console.log("Conectado no mongo com sucesso!")
  } catch (error) {
    console.log("erro pra conectar no mongoose: ", error);
  }
}

module.exports = connectToDataBase
