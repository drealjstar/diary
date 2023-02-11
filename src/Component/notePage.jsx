import React from "react";
import "./notePage.css";
import Form from "./form";
import Display from "./display";


const Note = () => {
  return (
    <div className="note">
      <div class="entry">
        <div className="wrapper2">
          <h1 className="header2"> Say Something ! </h1>
        </div>
        <Form />
      </div>

      <Display />
    </div>
  )
}


export default Note;
