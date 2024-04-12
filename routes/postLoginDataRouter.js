const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const app = express();
const postLoginData = require('../controllers/postLoginData');
const postLoginDataRouter = express.Router();


//userTableRoute.post('/login', authenticationMiddleware.authenticate, postRegsitrationController.postRegistration);
postLoginDataRouter.post('/login', postLoginData.postLogin);
postLoginDataRouter.use(errorHandler);

module.exports=postLoginDataRouter;



