import React from "react";
import "./fullDisplay.css";
import { Link } from "react-router-dom";


const FullDisplay = () => {
    return (
        <div className="body">
            <div>
                <Link to="/note" className="noteLink">
                    <p className="noteLinkText">Back</p>
                </Link>
            </div>
            <div className="innerBody">

            </div>
        </div>
    )
}

export default FullDisplay;