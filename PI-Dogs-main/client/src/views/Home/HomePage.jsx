import React, { useState, useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { Temperaments, fetchDogs } from "../../Redux/actions";
import style from './HomePage.module.css'
import SearchBar from "../../Components/SearchBar/SearchBar";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { dogs } = useSelector((state) => state);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(Temperaments());
  }, [dispatch]);



  const allDogs = useSelector((state) => state.allDogs);
  // Función para manejar la búsqueda de perros por nombre:
     const handleSearch = (term) => {    
    const results = allDogs.filter((dog) =>
      dog.nombre.toLowerCase().includes(term.toLowerCase())
      );      
    setSearchResults(results);
    setCurrentPage(1);
    
  }; 

  const filteredDogs = searchResults.length > 0 ? searchResults : dogs;

  // Paginación
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToShow = filteredDogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);

  return (
    
    <div className={style.homeContainer}>
      <div className={style.navContainer}>
      <SearchBar onSearch={handleSearch} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        dogsPerPage={dogsPerPage}
      />
      </div>
      <div className={style.cardContainer}>
        {dogsToShow.map((dog) => (
          <CardContainer
            key={dog.id}
            id={dog.id}
            nombre={dog.nombre}
            imagen={dog.imagen}
            temperamento={dog.temperamento}
            peso={dog.peso}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;