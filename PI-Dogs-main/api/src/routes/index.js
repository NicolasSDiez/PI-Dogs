const { Router } = require('express');
const { getDogsHandler } = require('../handllers/getDogsHandler')
const { getDogsDetailHandler } = require('../handllers/getDogsDetailHandler')
const { getDogsNameHandler } = require('../handllers/getDogsNameHandler')
const { postDogsHandler } = require('../handllers/postDogsHandler')
const { getTempHandler } = require('../handllers/getTempHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogsHandler) //Funciona
router.get('//dogs/:idRaza', getDogsDetailHandler)
router.get('/dogs/name', getDogsNameHandler)
router.post('/dogs', postDogsHandler)
router.get('/temperaments', getTempHandler)

module.exports = router;
