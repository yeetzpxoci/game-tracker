import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/games">
            <GamesPage />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App