const axios = require("axios");
const URL_BASE = 'https://api.thedogapi.com/v1'
const IMAGE_URL = 'https://cdn2.thedogapi.com'

const getAllDogsApi = async () => {
    try {
        const  { data } = await axios(`${URL_BASE}/breeds`)

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
        
        return dogs

    } catch (error) {
        throw error
    }
}

module.exports = getAllDogsApi;