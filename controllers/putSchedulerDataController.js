const connection = require('../config/db');

const updateScheduler = {
    updateSchedulerData: async (req, res) => {
        const { id } = req.params; 

        try {
           // const { id } = req.body;

            const updateQuery = `UPDATE schedulerTable SET /* updated fields */ WHERE id = ${id}`;

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
