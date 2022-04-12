const connection = require('../database/connection');

module.exports = {
  async getProducts(page) {
    const [count] = await connection('products').count();
    
    const products = await connection('products')
    .limit(10)
    .offset((page-1) * 10)
    .select();

    return {products, count};
  },

  async getProduct(id) {
    const product = await connection('products')
      .select()
      .where('id', id); 
    
    return product;

  }
}