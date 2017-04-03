const server = require('./config/server.js') //Requisição do servidor e webservices
require('./config/database.js') //Requisição do Mongo
require('./config/routes.js')(server) //Requisição do Mongo
