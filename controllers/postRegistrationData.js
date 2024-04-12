const connection = require('../config/db'); // Assuming you have a database configuration file

const postRegistrationData ={
    postRegistration: async (req, res) => {
    var brandID, theatreID;
    const { userName, dateOfBirth, phoneNumber, emailID, photo, cardID, address, pinCode, languageSpoken, loginPIN, brand, theatre, dateTime
  } = req.body;

  try {
    const queryOne = `SELECT id from brandTable WHERE brandName = '${brand}'`;
    const [brandIDJSON] = await connection.query(queryOne);
    brandID = brandIDJSON[0].id;
    console.log(brandID)
    if(brandID){
        console.log("brandID : ",brandID)
        console.log("req", req.body)
        const query = `INSERT INTO userTable ( id, userName, dateOfBirth, phoneNumber, emailID, photo, cardID, address, pinCode, languageSpoken, loginPIN, brandID, theatreID, dateTime, isDeleted, createdAt, updatedAt )
    VALUES ( null, '${userName}', '${dateOfBirth}', ${phoneNumber}, '${emailID}', '${photo}', ${cardID}, '${address}', ${pinCode}, '${languageSpoken}', ${loginPIN}, ${brandID}, 1, '${dateTime}', false, NOW(), NOW())`;

    const [result] = await connection.query(query);
    if(result){//const token = jwt.sign({ loginPIN: loginPIN, username: userName }, process.env.JWT_SECRET);
        res.status(200).json({ message:"Registration successful"});
    }
    }
    else{
      console.log('brandId not found')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration Server error' });
  }}};

  module.exports = postRegistrationData;