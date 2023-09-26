import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddGameForm from '../components/AddGameForm'

function GamesContainer(props) {
    const [toggleAddGameForm, setToggleAddGameForm] = useState(false);

    const Navigate = useNavigate();

    const handleGameClick = (gameURL) => {
        Navigate('/games/' + gameURL);
    }

    const handleToggleForm = () => {
        setToggleAddGameForm(!toggleAddGameForm);
    }

    return (
        <>
            <div id='games-container'>
                {props.games === null ? (
                    <p>Loading...</p>
                ) : (
                    props.games.map((game, index) => 
                    <div className='game-div' onClick={() => handleGameClick(game._id)}>
                        <li key={index}>{game.name}</li>
                    </div>
                    )
                )}

                {toggleAddGameForm ? (
                    <div className='game-div'>
                        <AddGameForm handleToggleForm={handleToggleForm}/>
                    </div>
                ) : (
                    <div className='game-div' onClick={() => handleToggleForm}>+</div>
                )}
            </div>
        </>
    )
}

export default GamesContainer