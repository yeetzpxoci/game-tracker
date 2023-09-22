import React from 'react';

function GamePage(props) {
    return (
        <div id='page'>
            This is game page and the game is: {props.game.name}
        </div>
    );
}

export default GamePage;