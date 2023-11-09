const { getDogsByName } = require('../controllers/getDogsByNameController')

const getDogsNameHandler = async(req, res) => {
    const { name } = req.query
try {
    const dogsByName = await getDogsByName(name)
    res.status(200).json(dogsByName)
} catch (error) {
    return res.status(404).json({error: error.message})
    }
}

module.exports = {getDogsNameHandler}