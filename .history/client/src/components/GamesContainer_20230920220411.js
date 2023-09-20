import React, { useState } from 'react'

function GamesContainer(props) {
    const [toggleAddGameForm, setToggleAddGameForm] = useState(false);

    const handleAddGameClick = () => {
        setToggleAddGameForm(!toggleAddGameForm);
    }

    return (
        <>
            <div>
            {props.games === null ? (
                <p>Loading...</p>
            ) :
                props.games.map((game, index) => 
                    <div style={{ backgroundColor: 'Cyan' }}>
                    <li key={index}>{game.name}</li>
                </div>
                )}

            <button onClick={handleAddGameClick}>Add game</button>
            </div>
        </>
    )
}

export default GamesContainer