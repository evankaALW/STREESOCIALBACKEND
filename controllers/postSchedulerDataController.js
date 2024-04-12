const connection = require('../config/db');

const postSchedulerDataController = {
    saveSchedulerData: async(req,res) =>
    {
        try {
            const schedulerData = req.body;
            console.log(schedulerData.video_links);
            schedulerData.video_links = JSON.stringify(schedulerData.video_links);
            console.log(schedulerData);
        //id, screenID, startDate, slotIndex, videoLinks, movieID, isDeleted, createdAt, updatedAt
            const query = `INSERT INTO schedulerTable( screenID, startDate, slotIndex, videoLinks, 
                movieID, isDeleted, createdAt, updatedAt) VALUES 
                (${schedulerData.theatre_id},'${schedulerData.start_date}',${schedulerData.slot_index},'${schedulerData.video_links}',
                id,false,NOW(),NOW())`;
                
            const results = await connection.query(query);
        
            console.log('Data inserted successfully into schedulerTable');
            if(results){
              return res.status(200).json('Data inserted successfully into schedulerTable');
            }
          } catch (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Error inserting data into schedulerTable' });
          }
    }};

module.exports = postSchedulerDataController;