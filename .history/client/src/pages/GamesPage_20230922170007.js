import React from 'react';
import Header from '../components/Header';
import GamesContainer from '../components/GamesContainer';

function GamesPage(props) {
    return (
        <div className='page'>
            <Header />
            <GamesContainer games={props.games} genres={props.genres}/>
        </div>
    );
}

export default GamesPage;