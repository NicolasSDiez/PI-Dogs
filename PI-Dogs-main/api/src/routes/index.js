const { Router } = require('express');
const { getDogsHandler } = require('../handllers/getDogsHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getDogsHandler)

module.exports = router;
