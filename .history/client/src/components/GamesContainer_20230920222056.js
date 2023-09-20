import React, { useState } from 'react'

function GamesContainer(props) {
    const [toggleAddGameForm, setToggleAddGameForm] = useState(false);

    const handleAddGameClick = () => {
        setToggleAddGameForm(!toggleAddGameForm);
    }

    return (
        <>
            <div id='games-container'>
                {props.games === null ? (
                    <p>Loading...</p>
                ) :
                    props.games.map((game, index) => 
                    <div className='game-div'}>
                        <li key={index}>{game.name}</li>
                    </div>
                )}
                <div>+</div>
            </div>
        </>
    )
}

export default GamesContainer