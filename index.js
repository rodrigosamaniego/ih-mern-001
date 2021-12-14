//Importaciones
const express = require("express")
const app = express()
const cors = require("cors")
require ("dotenv").config()


const connectDB = require('./config/db')



//Middlewares
//Base de datos
connectDB()

// HABILITAR CORS (ACCESOS DE AMBIENTES DE DESARROLLO DE TERCEROS)
app.use(cors())

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
