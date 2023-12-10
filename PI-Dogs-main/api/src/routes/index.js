const { Router } = require('express');
const { getDogsHandler } = require('../handlers/getDogsHandler')
const { getDogsDetailHandler } = require('../handlers/getDogsDetailHandler')
const { getDogsNameHandler } = require('../handlers/getDogsNameHandler')
const { postDogHandler } = require('../handlers/createDogsHandler')
const { getTempHandler } = require('../handlers/getTempHandler');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogsHandler) 
router.get('/dogs/:idRaza', getDogsDetailHandler)
router.get('/dog/name', getDogsNameHandler)
router.post('/dogs', postDogHandler)
router.get('/temperaments', getTempHandler)


module.exports = router;
