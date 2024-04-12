const connection = require('../config/db');

const deleteSchedulerDetails = {
    deleteSchedulerData: async (req, res) => {
        try {
            const { id } = req.params;
            const query = `DELETE FROM schedulerTable WHERE id = ${id}`;
            const result = await connection.query(query);
            if (result) {
                return res.status(200).json({ message: `schedulerTable row of id ${id} deleted successfully` });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};


module.exports = deleteSchedulerDetails;
