
const Store = require("./../models/Store")

exports.create = async (req, res) => {
    //Creación de variables y asignación de valores del formulario
    const{
        domicilio,
        telefono
    }= req.body

    //Crear una guitarra
try {
    const newStore = await Store.create({
        domicilio,
        telefono
    })

    //Respuesta en json
    res.json ({
        msg:"Tienda creada con éxito",
        data: newStore
    })
    
} catch (error) {

    res.status(500).json({
        msg:"Error en la creación de una tienda",
        error: error
    })
    
}

}

exports.readAll = async (req, res) => {
    try {

        const stores = await Store.find({})
        res.json({
            msg: "Tienda creada",
            data: stores
        })
        
    } catch (error) {

        res.status(500).json({
            msg: "Hubo un error",
            error: error
        })
        
    }
}

exports.readOne = async (req, res) => {
    const {id} = req.params

    try {
        const store = await Store.findById(id)
        res.json({
            msg: "Tienda obtenida",
            data: store
        })
        
    } catch (error) {
        res.status(500).json({
            msg: "hubo un error",
            error: error
        })
        
    }
}