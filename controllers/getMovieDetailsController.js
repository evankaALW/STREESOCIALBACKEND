const connection = require('../config/db');

const getMovieDetails = {
    getMovieData : async (req, res) => {
        try{
            const query = `SELECT * FROM movietable`;

            const result = await connection.query(query);
    
            if(result)
            {
                return res.status(200).json({"movieData": result})
            }
            
        }
        catch(error)
        {
            return res.status(500).json({error:error})
        }
    }
};

module.exports = getMovieDetails;