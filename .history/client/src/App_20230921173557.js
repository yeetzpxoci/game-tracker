import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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