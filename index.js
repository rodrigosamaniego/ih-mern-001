//Importaciones
const express = require("express")
const app = express()
require ("dotenv").config()

const connectDB = require('./config/db')


//Middlewares
//Base de datos
connectDB()


//Todas las peticiones y respuestas se manejan en protoclo json
app.use(express.json())

//Rutas
app.use("/guitars", require("./routes/guitars"))

app.use("/users", require("./routes/users"))

app.use("/stores", require("./routes/stores"))


//Server

app.listen(process.env.PORT, () => {
    console.log(`Corriendo en ${process.env.PORT}`)
})
