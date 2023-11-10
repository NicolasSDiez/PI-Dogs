const axios = require('axios')
const { Temperament } = require('../db')
const URL_BASE = 'https://api.thedogapi.com/v1'

const getTempFromApi = async () => {
    try {
        const { data } = await axios(`${URL_BASE}/breeds`)
        let temperaments = []
        data.forEach(breed => {
            if(breed.temperament){
                const temperamentos = breed.temperament.split(', ')
                temperamentos.forEach(temperamento => {
                    if(!temperaments.includes(temperamento)) {
                        temperaments.push(temperamento)
                    }
                })
            }
        });

        const TemperamentsDB = await Promise.all(temperaments.map(async temperament => {
            const [temp, created] = await Temperament.findOrCreate({where: {name:temperament}, default: {name:temperament}})
            return temp;
        })) 
        return TemperamentsDB;
    } catch (error) {
        throw error;
    }
}

module.exports = { getTempFromApi }