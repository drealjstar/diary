import React from "react";
import "./display.css";
import { RiDeleteBinLine } from "react-icons/ri";

const Display = ({ item, deleteItem }) => {
    return (
        <div className="list">
            <span className="listTitle">{item.title}</span>
            <span className="listDate">{item.date}</span>
            <RiDeleteBinLine onClick={() => deleteItem(item.id)} className="delete" />
        </div>

    )
}

export default Display;

