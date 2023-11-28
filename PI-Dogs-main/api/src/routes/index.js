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
router.get('/dogs', getDogsHandler) //anda gracias a sergio
router.get('/dogs/:idRaza', getDogsDetailHandler)//funciona
router.get('/dog/name', getDogsNameHandler)//funciona
router.post('/dogs', postDogHandler)//ya anda
router.get('/temperaments', getTempHandler)//andaaaa


module.exports = router;
