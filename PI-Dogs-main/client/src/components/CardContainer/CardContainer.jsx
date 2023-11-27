import style from '../CardContainer/CardContainer.module.css'
import { Link } from 'react-router-dom'


const CardContainer = ({ imagen, nombre, temperamento, peso, id }) => {
   
  return (
    <div className={style.container}>
      {!id && <p>No hay conicidencias</p> }
      <img src={imagen} alt={nombre} className={style.img} />
      <h2>{nombre} </h2>
      <div className={style.detailDog}><h3>
        Temperamentos: 
        {Array.isArray(temperamento) && temperamento.every(obj => typeof obj === 'object')
          ? temperamento.map(temp => temp.nombre).join(", ")
          : temperamento?.join(", ")}
      </h3>
      <h3>Peso {isNaN(id)? peso : peso.metric} </h3></div>
      <Link to={`/detail/${id}`}>
        <button className={style.linkDetailButton}>Ver Detalle</button>
      </Link>

    </div>
  )
}
export default CardContainer;
