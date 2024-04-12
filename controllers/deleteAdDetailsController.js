const connection = require('../config/db');

const deleteAdvertisementDetails = {
    deleteAdData: async (req, res) => {
        try {
            const { id } = req.params;
            const query = `DELETE FROM advertisementTable WHERE id = ${id}`;
            const result = await connection.query(query);

            if (result) {
                return res.status(200).json({ message: `Advertisement Table row of id ${id} deleted successfully` });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};


module.exports = deleteAdvertisementDetails;
