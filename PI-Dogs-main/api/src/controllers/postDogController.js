const { Dog, Temperaments } = require('../db')

const createNewDog = async (imagen, nombre, altura, peso, longevidad, temperaments) => {
    try {
        
        if (!imagen || !nombre || !altura || !peso || !longevidad){ 
            throw Error('Faltan datos.')
        }
        const newDog = await Dog.create ({
            imagen,
            nombre,
            altura,
            peso,
            longevidad,
            isDB: true
        });
                   
            const temperamento = await Temperaments.findAll({
                where: {
                    nombre: temperaments,
                }
            })
            await newDog.setTemperaments(temperamento);
        

        return newDog;
        
    } catch (error) {
        throw error;
    }
}

module.exports =  createNewDog;