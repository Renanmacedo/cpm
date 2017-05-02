var api = require('../api');

module.exports = function(app){
    
    app.route('/produtos')
        .get(api.listaProdutos);

    app.route('/mercados')
        .get(api.listaMercados);

    app.route('/app')
        .post(api.cadastrarProduto);
}