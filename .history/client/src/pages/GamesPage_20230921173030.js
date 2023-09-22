import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import GamesContainer from '../components/GamesContainer';

function GamesPage() {
    return (
        <div id='page'>
            <Header />
            <GamesContainer games={games}/>
        </div>
    );
}

export default GamesPage;