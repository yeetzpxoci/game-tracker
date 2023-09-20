import React, { useState } from 'react';
import Navbar from '../components/Navbar'

function GamesPage() {
    const [games, setGames] = useState(null);

    async function fetchGames() {
        try {
            const response = await fetch('http://localhost:5000/games');
            const data = await response.json();
        } catch (error) {
            console.log('Error: ', error);
        }
    } 

    return (
        <div>
            <Navbar />
            This is games page
        </div>
    );
}

export default GamesPage;