import React, { BrowserRouter, Routes, Route } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <div>
      <Header>
        <Navbar></Navbar>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/games" element={<GamesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App