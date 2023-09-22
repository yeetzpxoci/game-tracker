import React from 'react';

function GamePage(props) {
    const gameID = window.location.pathname.split('/').pop();
    const game = props.games.filter(game => game._id === gameID);

    return (
        <div id='page'>
            This is game page and the game is: {game.name}
        </div>
    );
}

export default GamePage;