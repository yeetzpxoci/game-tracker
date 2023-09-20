import React, { BrowserRouter, Route, Switch } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import GamesPage from './components/GamesPage';

function App() {
  return (
    <div>
      <Header>
      </Header>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/games" exact component={GamesPage} />
          </Switch>
        </div>
      </BrowserRouter>
      );
    </div>
  )
}

export default App