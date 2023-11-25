import React, { useState, useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { Temperaments, fetchDogs, originFilter } from "../../Redux/actions";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Pagination from "../../Components/Pagination/Pagination";
import FilterOrigin from "../../Components/Filter/OriginFilter";
import style from './HomePage.module.css'
// import Loading from "../Loading/Loading";
// import NavBar from "../../Components/NavBar/NavBar";
import SortingOptions from "../../Components/Filter/SortingOptions";
import TemperamentFilter from "../../Components/Filter/TemperamentFilter";



const Home = () => {
  const [loading, setLoading] = useState(true);
  const [filteredOrigin, setFilteredOrigin] = useState("");

  const allDogs = useSelector((state) => state.allDogs);
  const { dogs } = useSelector((state) => state); 
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 4;
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedTemperament, setSelectedTemperament] = useState("");

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(Temperaments());
    //setLoading(false)
  }, [dispatch]);



  // Función para manejar la búsqueda de perros por nombre:
     const handleSearch = (term) => {    
    const results = allDogs.filter((dog) =>
      dog.nombre.toLowerCase().includes(term.toLowerCase())
      );      
    setSearchResults(results);
    setCurrentPage(1);
    
  }; 

   // Función para filtrar perros por temperamento:
   const handleFilterByTemperament = (selectedValue) => {
    setSelectedTemperament(selectedValue);
    setCurrentPage(1);
  };

  //Función para filtrar perros por origen:
  const handleFilterByOrigin = (origin) => {
    console.log("Filtered origin:", origin);
    setFilteredOrigin(origin);
    setCurrentPage(1);
  };

  // Variables para almacenar los perros a mostrar y paginar
  let dogsToShow = [];
  let dogsToPaginate = dogs;

  // Si se seleccionó un origen, filtrar por origen
  if (filteredOrigin === "API") {
    dogsToPaginate = dogsToPaginate.filter((dog) => typeof dog.id === "number");
  } else if (filteredOrigin === "Database") {
    dogsToPaginate = dogsToPaginate.filter((dog) => typeof dog.id === "string");
  }

  // Si hay resultados de búsqueda, mostrar esos resultados
  if (searchResults.length > 0) {
   dogsToPaginate = searchResults;
  }

   // Si se seleccionó un temperamento, filtrar por temperamento
  if (selectedTemperament) {
    dogsToPaginate = dogsToPaginate.filter(
      (dog) =>
        (dog.temperamento && dog.temperamento.includes(selectedTemperament)) ||
        (dog.temperaments &&
          dog.temperaments.some((temp) => temp.name === selectedTemperament))
    );
  }
 

  // Ordenar perros según el campo y el orden seleccionados
  const sortedDogs = dogsToPaginate.slice().sort((a, b) => {
    if (sortField === "name") {
      return sortOrder === "asc"
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre);
    } else if (sortField === "weight") {
      const aWeight = parseFloat(a.peso?.metric) || 0;
      const bWeight = parseFloat(b.peso?.metric) || 0;
      return sortOrder === "asc" ? aWeight - bWeight : bWeight - aWeight;
    }
  });


   // Obtener los perros a mostrar en la página actual con un slice
    dogsToShow = sortedDogs.slice(
    (currentPage - 1) * dogsPerPage,
    currentPage * dogsPerPage
  );


  //total de paginas
  
  
  // Función para manejar el cambio de campo y orden de ordenamiento
   const handleSortChange = (field, order) => {
      setSortField(field);
      setSortOrder(order);
      setCurrentPage(1);
    };
    
    
    
    
    
    const filteredDogs = searchResults.length > 0 ? searchResults : dogs;
    const totalPages = Math.ceil(filteredDogs.length / dogsPerPage);
    
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToShows = filteredDogs.slice(startIndex, endIndex);
  
  

  
  
  

  return (
    
    <div className={style.homeContainer}>      
      <FilterOrigin onFilterChange={handleFilterByOrigin} />
      <div className={style.navContainer}>
      <div>
      <SearchBar onSearch={handleSearch} />
      <SortingOptions onSortChange={handleSortChange} />
      <TemperamentFilter onChange={handleFilterByTemperament} />
      </div>
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