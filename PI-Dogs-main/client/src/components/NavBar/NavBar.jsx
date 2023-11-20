import React from 'react';
import { Link, } from 'react-router-dom';
import style from './NavBar.module.css'; 

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/create-dog">Crea a tu mascota!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;