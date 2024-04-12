const connection = require('../config/db');

const updateMovieDetails = {
    updateMovieData: async (req, res) => {
        const { id } = req.params; 

        try {
            const { isDeleted, isExpired, startDate, endDate } = req.body;

            let setClause = '';// Constructing the SET clause dynamically based on provided fields
            if (isDeleted !== undefined) setClause += `isDeleted = ${isDeleted}, `;
            if (isExpired !== undefined) setClause += `isExpired = ${isExpired}, `;
            if (startDate !== undefined) setClause += `startDate = '${startDate}', `;
            if (endDate !== undefined) setClause += `endDate = '${endDate}', `;

            setClause = setClause.replace(/,\s*$/, '');// Removing the trailing comma and space

            const updateQuery = `UPDATE movieTable SET ${setClause} WHERE id = ${id}`;// Constructing the final update query
            const result = await connection.query(updateQuery);

            if (result) {
                res.status(200).json({ message: 'Movie updated successfully' });
            } else {
                res.status(400).json({ message: 'Failed to update movie' });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = updateMovieDetails;
