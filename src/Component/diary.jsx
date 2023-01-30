import React from "react";
import "./diary.css";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div className="home">
            <h1 className="header">Diary</h1>
            <div className="wrapper">
                <div className="image"></div>
                <div className="detail">
                    <h2>Sign in</h2>
                    <h3>User name</h3>
                    <input type="text" className="input1" />
                    <h3 className="password">Password</h3>
                    <input type="password" className="input1" />
                    <button className="signInButton">Sign in</button>
                    <div className="option">
                        <p>Or,</p>
                        <Link to="/sign" className="sign">
                            <p>Sign up</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;


