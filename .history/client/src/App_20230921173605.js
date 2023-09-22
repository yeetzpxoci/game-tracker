import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import GamesPage from './pages/GamesPage';
import GamePage from './pages/GamePage';
import GenresPage from './pages/GenresPage';

function App() {
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