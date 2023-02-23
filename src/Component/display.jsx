import React from "react";
import "./display.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { reduceLength } from './reduceLength';


const Display = ({ item, deleteItem }) => {
    return (

        <div className="list">
            <Link to="/full" className="full">
                <div className="subList">
                    <span className="listTitle">{reduceLength(item.title, 24)}</span>
                    <span className="listDate">{item.date}</span>
                </div>
            </Link>
            <RiDeleteBinLine onClick={() => deleteItem(item.id)} className="delete" />
        </div>

    )
}

export default Display;

