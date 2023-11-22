import { useParams } from 'react-router-dom';
import style from './DogDetail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getId } from '../../Redux/actions';


const DogDetail = ()=>{
    const {id}= useParams();
    const dispatch = useDispatch();
    const {detail} = useSelector((state)=>state);
    useEffect(() => {
        dispatch(getId(id));
      }, [dispatch, id]);
//   console.log("este es el" ,id)
    
return (
    <>
      {
        isNaN(id) ?
          
            <div className={style.card}>
              <p>Id: {detail.id}</p>
              <img src={detail.imagen} alt="" />
              <p>Nombre: {detail.nombre}</p>
              <p>Altura: {detail.altura}</p>
              <p>Peso: {detail.peso}</p>
              <p>Temperamento: {detail.temperaments?.map((temp)=>temp.nombre + " ")}</p>
              <p>Longevidad: {detail.longevidad}</p>
            </div>
          
          :
          <div className={style.card}>
            <p>Id:{detail.id}</p>
            <img src={`https://cdn2.thedogapi.com/images/${detail.reference_image_id}.jpg`} alt="" />
            <p>Nombre:{detail.name}</p>
            <p>Altura:{detail.height?.metric}</p>
            <p>Peso:{detail.weight?.metric}</p>
            <p>Temperamento:{detail.temperament}</p>
            <p>Longevidad:{detail.life_span}</p>
          </div>
      }
    </>
  )
    }
    
    export default DogDetail;
