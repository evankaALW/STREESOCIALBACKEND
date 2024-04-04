const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
const app = express();
const userTableController = require('../controllers/getUserTableController');
const userTableRoute = express.Router();

userTableRoute.get('/login',userTableController.getUserTable);
userTableRoute.use(errorHandler);

module.exports=userTableRoute;
