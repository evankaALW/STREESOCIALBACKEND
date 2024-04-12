const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
const getAdvertisementDetails = require('../controllers/getAdDetailsController');
const updateAdvertisement = require('../controllers/putAdDetailsController');
const adDetailsRouter = express.Router();

adDetailsRouter.get('/getAdvertisementDetails',getAdvertisementDetails.getAdData);
adDetailsRouter.put('/updateAdvertisement/:id', updateAdvertisement.updateAdData);

adDetailsRouter.use(errorHandler);

module.exports=adDetailsRouter;
