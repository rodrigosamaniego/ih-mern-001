// importaciones
const express = require("express")
const router = express.Router()
const guitarController = require("./../controllers/guitarController")

//ruteo

//crear guitarras
router.post("/create", guitarController.create)

//Leer guitarras

// LEER GUITARRAS
router.get("/readall", guitarController.readAll)

//Leer una guitarra
router.get("/readone/:id", guitarController.readOne)

//actualizar una guitarra
router.put("/edit/:id", guitarController.edit)

//borrar una guitarra
router.delete("/delete/:id", guitarController.delete)

//exportaciones
module.exports = router