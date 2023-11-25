import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'; 

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/create-dog">¡Create your pet!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;