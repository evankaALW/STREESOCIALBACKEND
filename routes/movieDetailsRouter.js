const express = require('express');
const errorHandler = require('../middleware/errorHandlingMiddleware');
const getMovieDetails = require('../controllers/getMovieDetailsController');
const updateMovie = require('../controllers/putMovieDetailsController');
const movieDetailsRouter = express.Router();

movieDetailsRouter.get('/getAdDetails',updateMovie.updateMovieData);

movieDetailsRouter.use(errorHandler);

module.exports=movieDetailsRouter;
