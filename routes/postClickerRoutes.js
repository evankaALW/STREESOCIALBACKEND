const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
//const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const app = express();
const addClickerData = require('../controllers/postClickerData');
//const postRegsitrationController = require('../controllers/postRegistrationData');
const postClickerRoute = express.Router();

//userTableRoute.post('/login', userTableController.login);

postClickerRoute.post('/addClickerData',addClickerData.postClicker);
postClickerRoute.use(errorHandler);

module.exports=postClickerRoute;
