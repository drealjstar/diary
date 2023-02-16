import React, { useState } from "react";
import "./form.css";


const Form = ({ addItem }) => {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }
        addItem(itemObject)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="wrapper3">
                    <input type="text" className="input3" placeholder="Title" onChange={(event) => setTitle(event.target.value)} />
                    <input type="date" className="date" onChange={(event) => setDate(event.target.value)} />
                </div>
                <textarea rows="5" cols="70" className="textArea" onChange={(event) => setText(event.target.value)} />
                <button type="submit" className="noteButton">Add Item</button>
            </form>
        </div>
    )
}

export default Form;























































