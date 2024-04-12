const cors = require('cors'); // Import the cors middleware
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const postLoginDataRouter = require('./routes/postLoginDataRouter');
const getUserDataRouter = require('./routes/getUserDataRouter');
const postClickerRoute = require('./routes/postClickerRoutes');
const postRegistrationRouter = require('./routes/postRegistrationRouter')
const brandDetailsRouter = require('./routes/getBrandDetailsRoute');
const adDetailsRouter = require('./routes/adDetailsRouter');
const movieDetailsRouter = require('./routes/movieDetailsRouter')
const schedulerDataRouter = require('./routes/schedulerDataRouter')

const userTable = require('./models/userTable');
const advertisementTable = require('./models/advertisementTable')
const clickerDeviceDetailsTable = require('./models/clickerDeviceDetailsTable');
const movieTable = require('./models/movieTable')
const schedulerTable = require('./models/schedulerTable')
const screenTable = require('./models/screenTable')
const seatManagementTable = require('./models/seatManagementTable')
const activityTable = require('./models/activityCashbackTable')
const showTable = require('./models/showTable')
const theatreTable = require('./models/theatreTable')
const ticketBookingTable = require('./models/ticketBookingTable')
const userResponseTable = require('./models/userResponseTable')
const usertable = require('./models/userTable')
const walletTable = require('./models/walletTable')
const offerTable = require('./models/offerTable')
const transactionTable = require('./models/transactionTable')
const userRoleTable = require('./models/userRoleTable')



//const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();
// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Custom middleware
//app.use(errorMiddleware); // Error handling middleware
// Routes
app.use('', postLoginDataRouter);
app.use('',getUserDataRouter);
app.use('/api',postClickerRoute);
app.use('',postRegistrationRouter);
app.use('',brandDetailsRouter);
app.use('',adDetailsRouter);
app.use('',movieDetailsRouter);
app.use('',schedulerDataRouter);

module.exports = app;