import React from 'react'

function AddGameForm(props) {
    return(
        <form method='POST' action="http://localhost:5000/games/add">
            <label for='name'>Name</label>
            <input name='name'></input>

            <label for='description'>Description</label>
            <input name='description'></input>

            <label for='developer'>Developer/s</label>
            <input name='developer'></input>

            <label for='platform'>Platform/s</label>
            <input name='platform'></input>

            <select name="genres" multiple>
                {props.genres.map(genre => (
                    <option key={genre._id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>

            <label for='status'>Status</label>
            <select name='status'>
                <option value="Finished">Finished</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Dropped">Dropped</option>
            </select>

            <label for='dateOfStart'>Date of start</label>
            <input type='date' name= 'dateOfStart'></input>

            <label for='dateOfFinish'>Date of finish</label>
            <input type='date' name='dateOfFinish'></input>

            <label for='rating'>Rating</label>
            <input name='rating'></input>

            <label for='imgUrl'>Image link</label>
            <input name='imgUrl'></input>
            <button type='submit'>Submit</button>
            <button onClick={() => props.handleToggleForm()}>Cancel</button>
        </form>
    )
}

export default AddGameForm