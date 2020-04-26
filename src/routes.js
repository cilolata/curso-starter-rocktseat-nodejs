const express = require('express');

const routes = express.Router();

const ProductController = require('./Controllers/ProductController');

//Primeira Rota
routes.get('/products', ProductController.index); 
// (req, res) => {

//     // Product.create({
//     //     title: 'React Native',
//     //     description: 'Build Native App With React',
//     //     url: 'http://github.com',
//     // });

//     return res.send('ola');
// });

routes.get('/products/:id', ProductController.show);
routes.post("/products", ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);



module.exports = routes;
