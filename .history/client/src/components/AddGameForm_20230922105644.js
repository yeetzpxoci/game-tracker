import React from 'react'

function AddGameForm(props) {
    return(
        <form method='POST' >
            <label for='name'>Name</label>
            <input name='name'></input>

            <label for='description'>Description</label>
            <input name='description'></input>

            <label for='developer'>Developer/s</label>
            <input name='developer'></input>

            <label for='platform'>Platform/s</label>
            <input name='platform'></input>

            <label for='genre'>Genre</label>
            <input name='genre'></input>

            <label for='status'>Status</label>
            <select name='status'>
                <option value="Finished">Finished</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Dropped">Dropped</option>
            </select>

            <label for='name'>Name</label>
            <input name='date_of_start'></input>

            <label for='name'>Name</label>
            <input name='date_of_finish'></input>

            <label for='name'>Name</label>
            <input name='rating'></input>

            <label for='name'>Name</label>
            <input name='img_url'></input>
            <button onClick={() => props.handleAddGameClick}>Cancel</button>
        </form>
    )
}

export default AddGameForm