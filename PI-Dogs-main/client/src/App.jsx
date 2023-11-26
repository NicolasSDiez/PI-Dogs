import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import {CreateDog, DogDetail, HomePage, LandingPage} from './views'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import { Temperaments, fetchDogs } from './Redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(Temperaments());
    //setLoading(false)
  }, [dispatch]);

  const location = useLocation();
    return (
    <div>       
        {location.pathname !== "/" && !location.pathname.startsWith("/detail/") && <NavBar/>}
        
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DogDetail />} />
        <Route path="/create-dog" element={<CreateDog />} />
      </Routes>
    </div>
      
    
  )
}

export default App
