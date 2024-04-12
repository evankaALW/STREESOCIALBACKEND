const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userTable = require('../models/userTable'); // Assuming User model is defined
const connection = require('../config/db'); // Assuming you have a database configuration file

const postLoginData ={
    postLogin: async (req, res) => {
  const { userName, loginPIN } = req.body;
  try {//compare username
    
    const query = `SELECT * FROM USERTABLE WHERE userName = '${userName}' AND loginPIN = ${loginPIN}`;
    const [result] = await connection.query(query);
    if(result){

        const token = jwt.sign({ loginPIN: loginPIN, username: userName }, process.env.JWT_SECRET);

        res.status(200).json({ message:token});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
};

  module.exports = postLoginData;