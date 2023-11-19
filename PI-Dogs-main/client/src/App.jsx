import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import {CreateDog, DogDetail, HomePage, LandingPage} from './views'
import './App.css'
import NavBar from './Components/NavBar/NavBar';


function App() {
  const location = useLocation();
    return (
    <div>       
        {location.pathname !== "/" && <NavBar/>}
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
