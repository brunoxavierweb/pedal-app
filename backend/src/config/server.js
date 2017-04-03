const port = 3003

const bodyParser =  require('body-parser')
const express = require('express')
const server = express() //Instacia o Express

server.use(bodyParser.urlencoded({ extended: true})) //Midlleware padrao para submit do urlencoded
server.use(bodyParser.json()) //Midlleware padrao para json

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
