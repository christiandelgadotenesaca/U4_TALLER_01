import mongoose from "mongoose"
import config from "./config"

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'tarea2'
})
    .then((data) => console.log('DB se encuentra conectada.'))
    .catch((error) => console.log(error))