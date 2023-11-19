import style from './DogDetail.module.css'
const DogDetail = (props)=>{
    return(
        <div className={style.card}>
            <p>Image:{props.image}</p>
            <p>Name:{props.name}</p>
            <p>Temperament:{props.temperament}</p>
            <p>Weight:{props.weight}</p>
        </div>
    )
    }
    
    export default DogDetail;

    /*
    imagen= reference_image_id"=string
    name= name=string
    temperament= strings varios
    peso=obj= imperial,metric
    */