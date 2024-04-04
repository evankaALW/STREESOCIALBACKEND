const { Sequelize } = require('sequelize');



const seque = new Sequelize(
    'streesocialmasterdb',
    'root',
    'Abc#12345',
    {
        host : 'localhost',
        dialect: 'mysql'
    }
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD, // This is the password
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql'
//   }
);

seque.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

module.exports = seque;
