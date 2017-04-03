module.exports = function(req, res, next){
  res.header('Accses-Control-Allow-Origin', '*')
  res.header('Accses-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Accses-Control-Allow-Headers', 'Origin, X-Requested-With', 'Content-Type', 'Accept')
  next()
}
