const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');
const {errorHandler} = require('./errorHandler');

app.use(express.json());

app.post('/', SaladController.createSalad);
app.get('/',SaladController.getSalad );
app.get('/:saladId', SaladController.getAllSalads);
app.patch('/:saladId', SaladController.updateSalad);
app.delete('/:saladId', SaladController.deleteSalad);

app.use(errorHandler);

module.exports = app;