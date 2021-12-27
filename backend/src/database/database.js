const mongoose = require('mongoose')
require('dotenv').config()

const URI = `${
    process.env.CONNECTION_STRING
}${
    process.env.DATABASE_NAME
}`

const dbConnection = async()=>{
    console.log(URI)
    try {
        return await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        throw new Error("Error al conectar a la base de datos", error.message)

    }
}

// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(db => console.log("Base de datos conectada en la colección", db.connection.name)).catch(error => console.log("Error al conectar a la base de datos", error.message));

module.exports = {
    dbConnection
}
