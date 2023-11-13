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
        //si en dogdata existe la prop temperament y si esta es un array con al menos 1 elem ( hay)
        // if (temperaments && temperaments.length > 0) { 
        //     const temperaments = await Temperaments.findAll({//busca en el modelo de la BDD. findall=>(ORM-sequelize)
        //         where: {
        //             name: temperaments,
        //         }
        //     })
        //     await newDog.setTemperaments(temperaments);
        // }
        
     
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