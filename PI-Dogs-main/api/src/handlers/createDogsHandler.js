const  createNewDog  = require('../controllers/postDogController');

const postDogHandler = async (req, res) => {
    const { imagen, nombre, altura, peso, longevidad, temperaments } = req.body;
    console.log(nombre)
    try {
        await createNewDog(imagen, nombre, altura, peso, longevidad, temperaments);
        return res.status(201).json({ message: 'El perro fue creado exitosamente'});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { postDogHandler };