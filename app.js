const express = require('express');
const bodyParser = require('body-parser');
//const routes = require('./routes');
const userTableRoute = require('./routes/userTableRoute');
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
require('dotenv').config();

//const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Custom middleware
//app.use(errorMiddleware); // Error handling middleware
// Routes
app.use('/api', userTableRoute);
const PORT = process.env.PORT || 8012;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });