const connection = require('../config/db');

const updateScheduler = {
    updateSchedulerData: async (req, res) => {
        const { id } = req.params; 
        try {
            const { isDeleted } = req.body;
           let setClause = '';// Constructing the SET clause dynamically based on provided fields
           if (isDeleted !== undefined) setClause += `isDeleted = ${isDeleted}, `;
           setClause = setClause.replace(/,\s*$/, '');// Removing the trailing comma and space           

            const updateQuery = `UPDATE schedulerTable SET ${setClause} WHERE id = ${id}`;
            const result = await connection.query(updateQuery);
            if (result) {
                res.status(200).json({ message: 'schedulerTable updated successfully' });
            } else {
                res.status(400).json({ message: 'Failed to update schedulerTable' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};
module.exports = updateScheduler;
