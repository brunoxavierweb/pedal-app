const mongoose = require('mongoose')
//advertencia
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
