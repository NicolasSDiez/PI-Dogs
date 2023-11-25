import style from './CardContainer.module.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const CardContainer = ({imagen, nombre, temperamento, peso, id})=>{
   
    const dogs = useSelector((state)=>state.dogs);
   
    
    return(
        <div className={style.container}>
           <img src={imagen} alt={nombre} className={style.img}/>
           <h2>{nombre}</h2>
           <h3>{temperamento?.join(", ")}</h3>
           <h3>{peso.metric}</h3>
           <Link to={`/detail/${id}`}>Detail</Link>
        </div>
    )
}
export default CardContainer;
