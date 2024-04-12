const connection = require('../config/db');

const updateMovie = {
    updateMovieData: async (req, res) => {
        const { id } = req.params; 

        try {
           // const { id } = req.body;

            const updateQuery = `UPDATE movieTable SET /* updated fields */ WHERE id = ${id}`;

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

module.exports = updateMovie;
