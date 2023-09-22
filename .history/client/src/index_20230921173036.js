import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import GamesPage from './pages/GamesPage';
import GamePage from './pages/GamePage';
import GenresPage from './pages/GenresPage';

const [games, setGames] = useState(null);

async function fetchGames() {
  try {
    const response = await fetch('http://localhost:5000/games');

    if (!response.ok) {
      throw new Error('Network response was not successful.')
    }

    const data = await response.json();
    setGames(data);
  } catch (error) {
    console.log('Error: ', error);
  }
}

useEffect(() => {
  fetchGames();
}, []);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/games",
    element: <GamesPage />
  },
  {
    path: "/games/:id",
    element: <GamePage />
  },
  {
    path: "/genres",
    element: <GenresPage />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
