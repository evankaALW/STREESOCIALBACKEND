const connection = require('../config/db');

const getSchedulerData = {
    schedulerData : async (req, res) => {
        try{ //id, screenID, startDate, slotIndex, videoLinks, movieID, isDeleted, createdAt, updatedAt
            const query = 'SELECT `id`, `screenID`, `startDate`, `slotIndex`, `videoLinks`, `movieID`, `isDeleted`  FROM `schedulerData` AS `schedulerData`';
            const scheduler = await connection.query(query);
            if(scheduler)
            {
                console.log("scheduler",scheduler)
                return res.status(200).json({schedulerData: scheduler})
            }
        }
        catch (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Error retieving data from schedulerData' });
          }}
};

module.exports = getSchedulerData;