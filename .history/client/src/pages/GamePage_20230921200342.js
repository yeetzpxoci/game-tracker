import React from 'react';

function GamePage(props) {
    const gameID = window.location.pathname.split('/').pop();
    const game = props.games.find(game => game._id === gameID);

    return (
        <div id='page'>
            <Header />
            This is game page and the game is {game.name}
            <img src={game.img_url} class='game-image'></img>
        </div>
    );
}

export default GamePage;