import React from "react";
import "./diaryHomePage.css";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="home">
            <h1 className="header">Diary</h1>
            <div className="wrapper">
                <div className="image"></div>
                <div className="detail">
                    <div className="innerDetail">
                        <Link to="/note" className="linkToNote">
                            <p className="linkToNoteText">Click to Draft</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;


