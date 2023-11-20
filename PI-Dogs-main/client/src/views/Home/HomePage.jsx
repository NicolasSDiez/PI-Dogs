import CardContainer from "../../Components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../Redux/actions";
import style from './HomePage.module.css'

const Home = ()=>{
    
    const{dogs} = useSelector((state)=>state)
    const dispatch = useDispatch();
    // console.log("muestra de",dogs)
    useEffect(()=>{
        dispatch(fetchDogs())
    },[])

    return (
        <div className={style.homeContainer}>
            <h1>Esta es la vista Home</h1>
            {dogs.map(dog=>{
                return (
             <div className={style.cardContainer}>
                <CardContainer
                id={dog.id}
                nombre={dog.nombre}
                imagen={dog.imagen}
                temperamento={dog.temperamento}
                peso={dog.peso}
                />
            </div>)
            })}
            </div>
    )
}

export default Home;