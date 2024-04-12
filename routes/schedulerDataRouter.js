const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
//const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const app = express();
const getSchedulerData = require('../controllers/getSchedulerDataController');
const postSchedulerDataController = require('../controllers/postSchedulerDataController');
const updateScheduler = require('../controllers/putSchedulerDataController');
const schedulerDataRouter = express.Router();

//userTableRoute.post('/login', userTableController.login);
schedulerDataRouter.get('/getSchedulerData',getSchedulerData.schedulerData);
schedulerDataRouter.post('/saveSchedulerData',postSchedulerDataController.saveSchedulerData);
schedulerDataRouter.put('/updateSchedulerData',updateScheduler);
schedulerDataRouter.use(errorHandler);

module.exports=schedulerDataRouter;
