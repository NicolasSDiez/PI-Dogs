const axios = require('axios');
const URL_BASE = 'https://api.thedogapi.com/v1'

const getDogsApi = async () => {
    try {
        const  { data } = await axios(`${URL_BASE}/breeds`)
        const dogs = data.map(breed => {
            const imageId = breed.reference_image_id;
            return {
                id: breed.id,
                nombre: breed.name,
                //imagen: (`${URL_BASE}/images/${idImagen}.jpg`), //a chequear
                altura: breed.height,
                peso: breed.weight,
                longevidad: breed.life_span,
                emperamento: breed.temperament ? breed.temperament.split(', ') : [],
            }
        })
        return dogs

    } catch (error) {
        throw error
    }
}

module.exports = getDogsApi;