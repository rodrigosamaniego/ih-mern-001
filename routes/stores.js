//importaciones
const express = require("express")
const router = express.Router()
const storesController = require ("./../controllers/storesController")

//ruteo

//crear tiendas
router.post("/create", storesController.create)

//Leer tiendas
router.get("/readall", storesController.readAll)


//Leer una tienda
router.get("/readone/:id", storesController.readOne)


//Editar una tienda
router.put("/edit/:id", storesController.edit)

//Exportaciones
module.exports = router

