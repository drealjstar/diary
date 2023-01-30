import React from "react";
import "./signUp.css";
import { Link } from "react-router-dom";


const SignUp = () =>{
    return(
       <div  className="signUpPage">
      <Link to="/" className="backLink">
      <p className="backText">Back</p>
      </Link>
      <div className="signUpwrapper">
      <div className="signUpForm">
       <h1 className="signUpHeader">Sign Up</h1>
      <input type="text" placeholder= "Username" className="input2"/>
      <input type="text" placeholder= "Email Adress" className="input2"/>
      <input type="password" placeholder="Password" className="input2"/>
      <input type="password" placeholder="Confirm Password" className="input2"/>
      <div className="checkBox">
      <input type="checkbox" /><p className="checkBoxText1">I accept the</p>
      <p className="checkBoxText2">Terms of use & Privacy Policy</p>
      </div>
      <button className="signUpButton">Sign Up</button>
      </div>
      
      </div>
            

      </div>    
    )
}


export default SignUp;
