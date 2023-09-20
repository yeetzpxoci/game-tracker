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
                props.games.map((game, index) => <li key={index}>{game.name}</li>
                )}

            <button onClick={handleAddGameClick}>Add game</button>
            </div>
            <form></form>
        </>
    )
}

export default GamesContainer