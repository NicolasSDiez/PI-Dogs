const { getTempFromApi } = require('../controllers/getTempController')

const getTempHandler = async (req, res) =>{
    try {
        const temperament = await getTempFromApi();
    return res.status(200).json(temperament)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {getTempHandler}