const axios = require('axios');
const URL_BASE = 'https://api.thedogapi.com/v1'

const getDogDetail = async(breedId) =>{
    try {
        //con "data" extraemos esa info de la resp de la API, es una tecnica brindada por Axios
        const {data} = await axios(`${URL_BASE}/breeds/${breedId}`)
        return data;
    } catch (error) {
        throw error
    }

}


module.exports = {getDogDetail}