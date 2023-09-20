import React, { BrowserRouter, Route, Switch } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div>
        <Navbar/>

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