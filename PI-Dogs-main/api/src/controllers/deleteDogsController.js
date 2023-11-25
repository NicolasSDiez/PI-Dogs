const { Dog, Temperaments } = require('../db')

const deleteDog = async() =>{
    try {
        const dogsBDD = await Dog.deleteDog({ // metodo de sequelize
            include :{
                model: Dog,
                attribute : nombre,

            },

         })
          return dogsBDD
    } catch (error) {
        return error
    }
}

module.exports = deleteDog;