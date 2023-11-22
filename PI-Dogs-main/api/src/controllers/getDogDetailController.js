const axios = require('axios');
const URL_BASE = 'https://api.thedogapi.com/v1'
const {Dog, Temperaments} = require("../db")

const getDogDetail = async(breedId) =>{
   if(isNaN(breedId)){
    return await Dog.findOne({
        where: {id: breedId},
        include: {
            model: Temperaments,
            attributes: {
                exclude: ["UUID"]
            },
            through: {
                attributes: [] //no muestra lo datos de tab intermedia.
            }
        }
    })
   }

   else{
        //con "data" extraemos esa info de la resp de la API, es una tecnica brindada por Axios
        const {data} = await axios(`${URL_BASE}/breeds/${breedId}`)
        return data;
    } 
}
        
    




module.exports = {getDogDetail}