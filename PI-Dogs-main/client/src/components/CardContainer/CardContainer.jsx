import { GET_DOGS } from '../../Redux/actions-types';

import style from './CardContainer.module.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const CardContainer = ({imagen, nombre, temperamento, peso, id})=>{
   
    const dogs = useSelector((state)=>state.dogs);
    console.log(temperamento)
    
    return(
        <div className={style.container}>
           <div>

            <img src={imagen} alt={nombre}/></div>
           <h2>{nombre}</h2>
           <h3>{temperamento?.join(", ")}</h3>
           <h3>{peso.metric}</h3>
           <Link to={`/detail/${id}`}>Detail</Link>
        </div>
    )
}
export default CardContainer;
/*
Imagen.
Nombre.
Temperamentos.
Peso.* */