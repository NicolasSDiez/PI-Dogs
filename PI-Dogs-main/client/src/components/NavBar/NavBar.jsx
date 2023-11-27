import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'; 
import { fetchDogs } from '../../Redux/actions';
import { useDispatch } from 'react-redux';


const NavBar = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchDogs())
  }

  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <Link to="/home" onClick={handleSubmit}>Home</Link>
          <Link to="/create-dog">¡Create your pet!</Link>
        </li>      
      </ul>
    </nav>
  );
};

export default NavBar;