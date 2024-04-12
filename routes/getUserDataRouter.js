const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');

const app = express();
const getUserTableController = require('../controllers/getUserTableController');
const userDataRouter = express.Router();

userDataRouter.get('/getLogin',getUserTableController.getUserTable);
userDataRouter.use(errorHandler);

module.exports=userDataRouter;



