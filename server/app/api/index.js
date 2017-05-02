var api = {};
var dataAtual = new Date();

var mercado = [
    {mercado: "extra", codigo: "7788"},
    {mercado: "redmix", codigo:"9900"},
    {mercado: "mixbahia",codigo:"9988"}
];
var produto = [
    {data: dataAtual, produto: "arroz", preco: 55.43, codigo:"4532",codigomMerc:"7788"},
    {data: dataAtual, produto: "macarrão",preco: 54.33, codigo: "4533",codigomMerc:"9900"},
    {data: dataAtual, produto: "feijão", preco: 44.89,codigo:"6566", codigomMerc:"9988"},
];

api.listaMercados = function(req,res){
    let listaMercados = mercado.sort();
    res.json(listaMercados);
};

api.listaProdutos = function(req, res){
    res.json(produto);
};

api.cadastrarProduto = function(req,res){
    req.body.data = new Date();
    produto.push(req.body);
    res.status(200).json({message: "ok", code: 005});
};
// expões o objeto
module.exports = api;