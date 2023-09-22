import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import GamesPage from './pages/GamesPage';
import GamePage from './pages/GamePage';
import GenresPage from './pages/GenresPage';

function App() {
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

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;