import React, { useState } from 'react';
import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { getDogsName } from '../../Redux/actions';


const SearchBar = ({onPageChange}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSearch = () => {
    if(searchTerm.length === 0){ alert("Debe ingresar al menos un carácter")}
    else{
    dispatch(getDogsName(searchTerm))
    onPageChange(1)
  }
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        placeholder="Search by breed name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;