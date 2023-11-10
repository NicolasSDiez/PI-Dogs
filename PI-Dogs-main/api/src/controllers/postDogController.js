const { Dog, Temperament } = require('../db')

const createNewDog = async (dogData) => {
    try {
        const { imagen, nombre, altura, peso, longevidad } = await dogData
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
        //si en dogdata existe la prop temperament y si esta es un array con al menos 1 elem ( hay)
        if (dogData.temperaments && dogData.temperaments.length > 0) { 
            const temperaments = await Temperament.findAll({//busca en el modelo de la BDD. findall (ORM-sequelize)
                where: {
                    name: dogData.temperaments,
                }
            })
            await newDog.setTemperaments(temperaments);
        }

        return newDog;
    } catch (error) {
        throw error;
    }
}

module.exports = { createNewDog };