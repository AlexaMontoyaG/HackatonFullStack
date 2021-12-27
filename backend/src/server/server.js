const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const {dbConnection} = require('../database/database');
require('colors')

class Server {
    constructor() {
        this.app = express();
        this.paths = {
            user: "/api/v1.0/user",
            product: "/api/v1.0/product",
            auth: "/api/v1.0/login"
        };
        this.port = process.env.PORT;
        this.middlewares();
        this.databaseConnection();
        this.routes();
    }

    middlewares() {
        this.app.use(cors({origin: "*"}));
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }

    routes() {}

    databaseConnection() {
        dbConnection().then((db) => console.log("Base de datos conectada en la colección", db.connection.name)).catch(console.log)

    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server init on port ${
                this.port
            }`.bgGreen.black)
        })
    }

}


module.exports = Server
