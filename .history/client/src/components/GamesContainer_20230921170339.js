import React, { useState } from 'react'

function GamesContainer(props) {
    const [toggleAddGameForm, setToggleAddGameForm] = useState(false);

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
                ) :
                    props.games.map((game, index) => 
                    <div className={'game-div'} onClick={() => handleGameClick(game.url)}>
                        <li key={index}>{game.name}</li>
                    </div>
                )}
                <div className={'game-div'}>+</div>
            </div>
        </>
    )
}

export default GamesContainer