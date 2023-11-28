const axios = require('axios')
const URL_BASE = 'https://api.thedogapi.com/v1'
const IMAGE_URL = 'https://cdn2.thedogapi.com'
const { Dog, Temperaments } = require('../db')
const { Op } = require("sequelize")

const getDogsByName = async(name) => {
    try {
        const { data } = await axios(`${URL_BASE}/breeds/search?q=${name}`)
        const dogs = data.map(breed => {
            const imageId = breed.reference_image_id; //referencia de la imagen de la breed
            return {
                id: breed.id,
                nombre: breed.name,
                imagen: (`${IMAGE_URL}/images/${imageId}.jpg`), 
                altura: breed.height,
                peso: breed.weight,
                longevidad: breed.life_span,
                temperamento: breed.temperament ? breed.temperament.split(', ') : [],
            }

        })
        const dogsBDD = await Dog.findAll({
            where: {nombre: {[Op.iLike]: `%${name}%`}}, // metodo de sequelize
            include :{
                model: Temperaments,
                attributes: {exclude: ["UUID"]},
                through: {attributes: []}

            }})
            if (!dogs || dogs.length === 0) {
                return dogsBDD;
            } else if (dogsBDD && dogsBDD.length > 0) {
                return [...dogs, ...dogsBDD];
            } else {
                return dogs;
            }

    } catch (error) {
        throw error
    }
}

module.exports = { getDogsByName };