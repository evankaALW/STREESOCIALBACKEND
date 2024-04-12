const connection = require('../config/db');

const getAdvertisementDetails = {
    getAdData : async (req, res) => {
        try{
            const query = `SELECT * FROM advertisementtable`;

            const result = await connection.query(query);
    
            if(result)
            {
                return res.status(200).json({adData: result})
            }
            
        }
        catch(error)
        {
            return res.status(500).json({error:error})
        }
    }
};

module.exports = getAdvertisementDetails;