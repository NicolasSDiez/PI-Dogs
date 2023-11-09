const axios = require('axios')
const URL_BASE = 'https://api.thedogapi.com/v1'

const getDogsByName = async(name) => {
    try {
        const {data} = await axios(`${URL_BASE}/breeds/search?q=${name}`)
        return data
    } catch (error) {
        throw error
    }
}

module.exports = {getDogsByName}