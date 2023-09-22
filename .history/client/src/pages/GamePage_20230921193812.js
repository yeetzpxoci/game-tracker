import React from 'react';

function GamePage(props) {
    const gameID = window.location.pathname.split('/').pop();
    return (
        <div id='page'>
            This is game page and the game is: {gameID}
        </div>
    );
}

export default GamePage;