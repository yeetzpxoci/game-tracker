import React, { BrowserRouter, Route, Switch } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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