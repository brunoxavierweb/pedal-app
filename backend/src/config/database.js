const mongoose = require('mongoose') //mapeamento dos objetos que vão pro mongo e conexao com o mongo

mongoose.Promise = global.Promise //advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')
