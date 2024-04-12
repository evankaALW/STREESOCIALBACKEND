const connection = require('../config/db');

const updateAdvertisement = {
    updateAdData: async (req, res) => {
        const { id } = req.params; 

        try {
            const { isDeleted, adStartTime, questionTableID } = req.body;
            let setClause = '';// Constructing the SET clause dynamically based on provided fields
            if (isDeleted !== undefined) setClause += `isDeleted = ${isDeleted}, `;
            if (adStartTime !== undefined) setClause += `isExpired = ${isExpired}, `;
            if (questionTableID !== undefined) setClause += `startDate = '${startDate}', `;

            setClause = setClause.replace(/,\s*$/, '');// Removing the trailing comma and space

            const updateQuery = `UPDATE advertisementtable SET ${setClause} WHERE id = ${id}`;// Construct your SQL update query
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
