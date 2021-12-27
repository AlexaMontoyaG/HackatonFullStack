const Server = require('./server/server')

require('dotenv').config()

console.log(process.env.CONNECTION_STRING)

const server = new Server()
server.startServer();