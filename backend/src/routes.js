const express = require('express');

const route = express.Router();

const userControllers = require('./Controllers/userControllers');
const profileControllers = require('./Controllers/profileControllers');
const productsController = require('./Controllers/productsController');

route.post('/user/register', userControllers.create);

route.post('/user/login', profileControllers.index);
route.get('/user/profile/:id', profileControllers.show);


route.get('/products', productsController.index);
route.get('/product/:id', productsController.show);
module.exports = route;