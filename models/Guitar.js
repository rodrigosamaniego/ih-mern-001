// ./server/models/Guitar.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
const guitarSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	imagen: {
		type: String,
		required: true
	},
	descripcion: {
		type: String,
		required: true
	}
})

// 3. MODELO
const Guitar = mongoose.model("Guitar", guitarSchema)

// 4. EXPORTACIÓN
module.exports = Guitar