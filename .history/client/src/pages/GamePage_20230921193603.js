import React from 'react';

function GamePage(props) {
    return (
        <div id='page'>
            This is game page and the game is: {window.location.pathname}
        </div>
    );
}

export default GamePage;