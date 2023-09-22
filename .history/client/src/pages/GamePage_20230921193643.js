import React from 'react';

function GamePage(props) {
    return (
        <div id='page'>
            This is game page and the game is: {window.location.pathname.split('/')}
        </div>
    );
}

export default GamePage;