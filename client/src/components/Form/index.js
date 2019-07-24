import React from "react";

function form(props) {
    return(
        <div id="searchContainer">
            <h3>Search books</h3>
            <form id="searchBooks">
                <label htmlFor="bookInput" form="searchBooks">Enter a book tittle to search:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="searchBooks" onChange={(e) => props.handleChange(e)} placeholder="Insert Book Title here" required/>
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default form;