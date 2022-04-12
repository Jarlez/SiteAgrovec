const connection = require('../database/connection');
const Product = require('../Models/productModels');

module.exports = {
  async index(req, res, next) {
    const {page = 1} = req.query;

    const products = await Product.getProducts(page);

    if(!products) return res.status(500).json({ error: 'Ocorreu algum erro com o Servidor' });

    res.header('X-Total-Count', products.count['count(*)']);

    return res.status(200).json(products.products);
  },

  async show(req, res, next) {
    const {id} = req.params;
    const product = await Product.getProduct(id);

    console.log(product)
    if(product) {
      return res.status(200).json(product)
    } 
  }
}