import React from "react";
import "./note.css";



const Note = () => {
  return (
    <div className="note">
      <div class="entry">
        <div className="wrapper2">
          <h1 className="header2"> Say Something ! </h1>
        </div>
        <div className="wrapper3">
          <input type="text" className="input3" placeholder="Title" />
          <input type="date" className="date" />
        </div>
        <textarea rows="5" cols="70" className="textArea"></textarea>
        <button className="noteButton">Add Item</button>
      </div>

      <div className="list"></div>

    </div>
  )
}


export default Note;
