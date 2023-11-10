const { Router } = require('express');
const { getDogsHandler } = require('../handlers/getDogsHandler')
const { getDogsDetailHandler } = require('../handlers/getDogsDetailHandler')
const { getDogsNameHandler } = require('../handlers/getDogsNameHandler')
const { postDogsHandler } = require('../handlers/postDogsHandler')
const { getTempHandler } = require('../handlers/getTempHandler')

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
