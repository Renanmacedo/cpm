var http = require('http')
    ,app = require('./config/express');

    http.createServer(app).listen(3345,function(){
        console.log("Aplicação acessível na porta: "+this.address().port);
    });