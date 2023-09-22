import React from 'react';
import Header from '../components/Header';
import GamesContainer from '../components/GamesContainer';

function GamesPage(props) {
    return (
        <div id='page'>
            <Header />
            <GamesContainer games={props.games}/>
        </div>
    );
}

export default GamesPage;