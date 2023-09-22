import React from 'react';

function GamePage(props) {
    const gameID = window.location.pathname.split('/').pop();
    const game = props.games.filter(game => game._id === gameID);
    console.log(game);

    return (
        <div id='page'>
            This is game page and the game is: 
        </div>
    );
}

export default GamePage;