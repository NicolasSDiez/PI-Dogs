const { getAllDogsApi } = require('../controllers/getAllDogsApi')
const { getAllDogsBdd } = require('../controllers/getAllDogsBdd')

const getDogsHandler = async (req, res) => {
    try {
        const dogsApi = await getAllDogsApi();
        const dogsBdd = await getAllDogsBdd();
        if(!dogsApi || !dogsBdd){
            throw new Error('No se encontraron perros')
        }
        const dogsApiyBdd = await [...dogsApi,...dogsBdd]
        res.status(200).json(dogsApiyBdd)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { getDogsHandler };