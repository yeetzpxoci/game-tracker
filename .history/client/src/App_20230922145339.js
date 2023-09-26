import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import GamesPage from './pages/GamesPage';
import GamePage from './pages/GamePage';
import GenresPage from './pages/GenresPage';

function App() {
    const [games, setGames] = useState(null);
    const [genres, setGenres] = useState(null);

    async function fetchData() {
        try {
            const [gamesResponse, genresResponse] = await Promise.all([
                await fetch('http://localhost:5000/games'),
                await fetch('http://localhost:5000/genres')
            ]);

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
        fetchData();
    }, []);


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/games",
            element: <GamesPage games={games} />
        },
        {
            path: "/games/:id",
            element: <GamePage games={games} />
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