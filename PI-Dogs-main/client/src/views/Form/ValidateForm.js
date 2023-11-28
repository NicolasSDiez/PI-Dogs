const validateForm = (form) => {

    let errors = {};

    if (form.imagen.length === 0) {
        errors.imagen = 'You must select an image';

    } else if (!/^(ftp|http|https):\/\/[^ "]+(\.(jpg|png|gif))$/i.test(form.imagen)) {
        errors.imagen = 'The image must have a .jpg, .png or .gif extension';
    }
    if (form.nombre.length === 0) {
        errors.nombre = "Please enter a name";
    } else if (!isNaN(form.nombre)) {
        errors.nombre = "Name should not contain numbers"
    }
    if (form.alturaMin >= form.alturaMax) {
        errors.alturaMin = "Minimum Height should be less than Maximum Height"
    }
    if (form.pesoMin >= form.pesoMax) {
        errors.pesoMin = "Minimum Weight should be less than Maximum Weight"
    }
    if (!form.longevidad || form.longevidad <= 0) {
        errors.longevidad = "You must select a longevity value"
    }
    if (form.temperamento.length === 0) {
        errors.temperamento = "You must select a longevity value greater than zero"
    }

    return errors;

}



export default validateForm;