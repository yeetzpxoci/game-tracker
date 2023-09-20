import React from 'react'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App