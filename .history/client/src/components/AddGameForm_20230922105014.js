import React from 'react'

function AddGameForm(props) {
    return(
        <form method='POST' >
            <input name='name'></input>
            <input name='description'></input>
            <input name='developer'></input>
            <input name='platform'></input>
            <input name='genre'></input>
            <input name='status'></input>
            <input name='date_of_start'></input>
            <input name='date_of_finish'></input>
            <input name='rating'></input>
            <input name='img_url'></input>
            <button onClick={() => props.handleAddGameClick}>Cancel</button>
        </form>
    )
}

export default AddGameForm