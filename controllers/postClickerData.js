const connection = require("../config/db")

const postClickerData = {
    postClicker : async (req,res) => {
        try{
        var replaced = false;
        const { screenID, IPAddress, seatNo, isReplaced, dateTime, issueIfReplaced, macAddress } = req.body;
        
        const query =  `INSERT INTO clickerdevicedetailstable (id, screenID, IPAddress, seatNo, isReplaced, dateTime, issueIfReplaced, isDeleted, macAddress, createdAt, updatedAt) VALUES (null, ${screenID}, '${IPAddress}', ${seatNo}, ${isReplaced}, '${dateTime}', '${issueIfReplaced}', false, '${macAddress}', NOW(), NOW())`;

        const results = await connection.query(query);

        if(results){
            res.status(200).json({ message:"200 OK postClickerData successful"});
        }
    }
    catch(error){
        res.status(500).json({message:"error"});
    }
    }
};

module.exports = postClickerData;