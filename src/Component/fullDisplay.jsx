import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./fullDisplay.css";

const FullDisplay = () => {
    const location = useLocation();
    const detail = location.state.detail;

    return (
        <div className="body">
            <div>
                <Link to="/note" className="noteLink">
                    <p className="noteLinkText">Back</p>
                </Link>
            </div>
            <div className="innerBody">
                <p className="detailDate">{detail.date}</p>
                <h2 className="detailTitle">{detail.title}</h2>
                <p className="detailText">{detail.text}</p>
            </div>
        </div>
    )
}

export default FullDisplay;