import React from 'react'

function GamesContainer(props) {
    return (
        <div>
            {props.games === null ? (
                <p>Loading...</p>
            ) :
                props.games.map((game, index) => <li key={index}>{game.name}</li>
                )}
        </div>
    )
}

export default GamesContainer