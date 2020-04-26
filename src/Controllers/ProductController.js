const mongoose = require('mongoose');

//importando o db Product
const Product = mongoose.model('Product');

//exportando um objeto com algumas funções
module.exports = {
    async index(req, res){

        const { page = 1 } = req.query;
        const products = await Product.paginate({ }, { page , limit: 10});

        return res.json(products);
    },

    //search
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //criação de novo produto. armazenamento
    async store(req, res){
        const product = await Product.create(req.body);

        //retornando o produto que acabou se ser criado na base de dados
        return res.json(product);
    },

    async update(req, res){
        //estamos buscando um produto pelo id e atualizando as propriedade dele que vem do body
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });//o new: true tá dizendo que é só para retornar o produto atualizado para a variavel product

        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);

        //neste caso o return é apenas send para retornar uma resposta de sucesso ou não
        return res.send()

    },
};
