const { Dog, Temperaments } = require('../db')

const getAllDogsDbb = async ()=> {
    try {
        const dogsBDD = await Dog.findAll({ // metodo de sequelize
            include :{
                model: Temperaments,
                attributes: {exclude: ["UUID"]},
                through: {attributes: []}

            },

         })
          return dogsBDD
    } catch (error) {
        return error
    }
}

module.exports =  getAllDogsDbb ;