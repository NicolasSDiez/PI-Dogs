const {getDogDetail} = require('../controllers/getDogDetailController')

const getDogsDetailHandler = async (req, res) =>{
    const {idRaza} = req.params;
    try {
        const detailDog = await getDogDetail(idRaza)
        return res.status(200).json(detailDog)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = { getDogsDetailHandler }