import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <form>
        <h3>Sign Up</h3>
        <div className="sign-in-info">
            <label>First name</label>
            <input type="text" className="firstName" placeholder="First name" />
        </div>
        <div className="sign-in-info">
            <label>Last name</label>
            <input type="text" className="lastName" placeholder="Last name" />
        </div>
        <div className="sign-in-info">
            <label>Email address</label>
            <input type="email" className="email" placeholder="Enter email" />
        </div>
        <div className="sign-in-info">
            <label>Password</label>
            <input type="password" className="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
        <p className="login">
            Already registered <Link to="/login">sign in?</Link>
        </p>
    </form>
    )
}

export default SignUp