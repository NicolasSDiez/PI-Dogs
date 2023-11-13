const getAllDogsBdd = require('../controllers/getAllDogsBddController')
const getAllDogsApi = require('../controllers/getAllDogsApiController')

const getDogsHandler = async (req, res) => {
    try {
         const dogsApi = await getAllDogsApi();
         const dogsBdd = await getAllDogsBdd();
        if(!dogsApi || !dogsBdd){
            throw new Error('No se encontraron perros')
        }
        const dogsApiyBdd =  [...dogsApi,...dogsBdd] //saqué el await
        res.status(200).json(dogsApiyBdd)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { getDogsHandler };