const { Dog, Temperaments } = require('../db')

const getAllDogsDbb = async ()=> {
    try {
        const dogsBDD = await Dog.findAll({
            include : Temperaments
        });
        return dogsBDD
    } catch (error) {
        return error
    }
}

module.exports = { getAllDogsDbb }