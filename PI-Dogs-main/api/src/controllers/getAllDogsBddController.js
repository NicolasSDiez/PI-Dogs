const { Dog, Temperament } = require('../db')

const getAllDogsDbb = async ()=> {
    try {
        const dogsBDD = await Dog.findAll({
            include : Temperament
        });
        return dogsBDD
    } catch (error) {
        return error
    }
}

module.exports = { getAllDogsDbb }