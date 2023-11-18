import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {CreateDog, DogDetail, HomePage, LandingPage} from './views'
import './App.css'


function App() {
    return (
    <div>       
      <Routes>
        <NavBar/>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DogDetail />} />
        <Route path="/create-dog" element={<CreateDog />} />
      </Routes>
    </div>
      
    
  )
}

export default App
