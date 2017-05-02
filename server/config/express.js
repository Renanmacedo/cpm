var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,path = require('path')
    ,routes = require('../app/routes');

app.set('clientePath',path.join(__dirname,'../..','cliente'));
// exibe no console o caminho do cliente
app.use(express.static(app.get('clientePath')));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
routes(app);

module.exports = app;