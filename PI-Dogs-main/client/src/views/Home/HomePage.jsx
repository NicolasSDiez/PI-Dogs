import React, { useState, useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Pagination from "../../Components/Pagination/Pagination";
import FilterOrigin from "../../Components/Filter/OriginFilter";
import style from './HomePage.module.css'
import SortingOptions from "../../Components/Filter/SortingOptions";
import TemperamentFilter from "../../Components/Filter/TemperamentFilter";
import { Temperaments, fetchDogs } from "../../Redux/actions";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(Temperaments());
      }, [dispatch]);
    
  
  const { dogs } = useSelector((state) => state);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 6;
    
  // Si hay resultados de búsqueda, mostrar esos resultados
  if (searchResults.length > 0) {
    dogsToPaginate = searchResults;  }

  const filteredDogs = searchResults.length > 0 ? searchResults : dogs;
  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToShows = filteredDogs.slice(startIndex, endIndex);


  return (

    <div className={style.homeContainer}>
      <FilterOrigin onPageChange={setCurrentPage} />
      <SearchBar onPageChange={setCurrentPage} />
      <SortingOptions onPageChange={setCurrentPage} />
      <TemperamentFilter onPageChange={setCurrentPage} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        dogsPerPage={dogsPerPage}
      />


      <div className={style.cardContainer}>
        {dogsToShows.map((dog) => (
          <CardContainer
            key={dog.id}
            id={dog.id}
            nombre={dog.nombre}
            imagen={dog.imagen}
            temperamento={isNaN(dog.id) ? dog.temperaments : dog.temperamento}
            peso={dog.peso}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;