import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function GamesContainer(props) {
    const [toggleAddGameForm, setToggleAddGameForm] = useState(false);

    const Navigate = useNavigate();

    const handleGameClick = (gameURL) => {
        Navigate('/games/' + gameURL);
    }

    const handleAddGameClick = () => {
        setToggleAddGameForm(!toggleAddGameForm);
    }

    return (
        <>
            <div id='games-container'>
                {props.games === null ? (
                    <p>Loading...</p>
                ) : (
                    props.games.map((game, index) => 
                    <div className='game-div' onClick={() => handleGameClick(game._id)}>
                        <li key={index}>{game.name}</li>
                    </div>
                    )
                )}

                {toggleAddGameForm ? (
                    <div className='game-div'>
                        <form method='POST' >
                            <input>Name</input>
                            <input>Description</input>
                            <input>Developer/s</input>
                            <input>Platform/s</input>
                            <input>Genres</input>
                            <input>Status</input>
                            <input>Date of start</input>
                            <input>Date of finish</input>
                            <input>Rating</input>
                            <input>Image link</input>
                            <button onClick={handleAddGameClick}>Cancel</button>
                        </form>
                    </div>
                ) : (
                    <div className='game-div' onClick={handleAddGameClick}>+</div>
                )}
            </div>
        </>
    )
}

export default GamesContainer