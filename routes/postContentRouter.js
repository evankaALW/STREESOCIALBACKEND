const express = require('express')
const errorHandler = require('../middleware/errorHandlingMiddleware');
//const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const app = express();
const postContentDetails = require('../controllers/postContentController');
const postContentRouter = express.Router();

//userTableRoute.post('/login', userTableController.login);

postContentRouter.post('/addClickerData',postContentDetails.postContentData);
postContentRouter.use(errorHandler);

module.exports=postContentRouter;
