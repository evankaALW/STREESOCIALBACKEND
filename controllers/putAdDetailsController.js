const connection = require('../config/db');

const updateAdvertisement = {
    updateAdData: async (req, res) => {
        const { id } = req.params; 

        try {
            const { id } = req.body;

            // Construct your SQL update query
            const updateQuery = `UPDATE advertisementtable SET /* updated fields */ WHERE id = ${id}`;

            const result = await connection.query(updateQuery);

            if (result) {
                res.status(200).json({ message: 'Advertisement updated successfully' });
            } else {
                res.status(400).json({ message: 'Failed to update advertisement' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = updateAdvertisement;
