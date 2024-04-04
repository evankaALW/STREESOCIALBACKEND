const connection = require('../config/db'); // Assuming you have a database configuration file

const postRegistrationData = {
    getUserTable: async (req, res) => {
        try {
            const query = 'SELECT * FROM userTable';
            const [results] = await connection.query(query);
            if(results){
                
                const filteredResults = results.map(user => {
                    if( user.loginPIN === null){
                        return {
                            id : user.id,
                            phoneNumber: user.phoneNumber,
                            userName: user.userName,
                            cardID: user.cardID,
                            emailID: user.emailID,
                            brandID: user.brandID,
                            theatreID: user.theatreID
                        };
                    }
                    else {
                        return user; // Keep the original user data if loginPIN is not null
                    }
                });

                return res.status(200).json({ filteredResults });
            }
            else{
                return res.status(500).json({ error: 'Error retrieving getUserTable responses. Please try again.' });
            }
          }   catch (error) {
            console.error('Error executing getUserTable query:', error);
          }   
      },
  };
  module.exports = postRegistrationData;