import React from 'react'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';
import { BrowserRouter, Route Link } from 'react-router-dom';

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

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/games">
            <GamesPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App