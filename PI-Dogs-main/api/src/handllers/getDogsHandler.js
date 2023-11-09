const { getAllDogsApi } = require('../controllers/getDogsApi')


const getDogsHandler = async (req, res) => {
    try {
        const dogsApi = await getAllDogsApi();
        if(!dogsApi){
            throw new Error('No se encontraron perros')
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { getDogsHandler };