import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'

function GamesPage() {
    const [games, setGames] = useState(null);

    async function fetchGames() {
        try {
            const response = await fetch('http://localhost:5000/games');

            if(!response.ok) {
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

    return (
        <div>
            <Navbar />
            {games.map(game => 
                <p>{game.name}</p>
            )}
        </div>
    );
}

export default GamesPage;