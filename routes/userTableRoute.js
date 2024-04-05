const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const app = express();
const userTableController = require('../controllers/getUserTableController');
const postRegsitrationController = require('../controllers/postRegistrationData');
const userTableRoute = express.Router();

//userTableRoute.post('/login', userTableController.login);

//userTableRoute.post('/login', authenticationMiddleware.authenticate, postRegsitrationController.postRegistration);
userTableRoute.post('/login', postRegsitrationController.postRegistration);
userTableRoute.get('/getLogin',userTableController.getUserTable);
userTableRoute.use(errorHandler);

module.exports=userTableRoute;



