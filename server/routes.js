const express = require('express');

const routes = express.Router();
const { getTiles, getGrout } = require('./controllers');

routes.get('/tiles', getTiles);
routes.get('/grout', getGrout);

module.exports = routes;
