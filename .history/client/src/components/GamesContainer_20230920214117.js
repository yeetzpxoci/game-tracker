import React from 'react'

function GamesContainer(props) {
    return (
        <div>
            {props.games === null ? (
                <p>Loading...</p>
            ) :
                props.games.map((game, index) => <li key={index}>{game.name}</li>
                )}

            <Button>Add game</Button>
        </div>
    )
}

export default GamesContainer