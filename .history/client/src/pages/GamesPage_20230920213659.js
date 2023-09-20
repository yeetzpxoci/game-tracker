import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

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
            <Header />
            {games === null ? (
                <p>Loading...</p>
            ) : 
                games.map((game, index) => <li key={index}>{game.name}</li>
            )}
        </div>
    );
}

export default GamesPage;