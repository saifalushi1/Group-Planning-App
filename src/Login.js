import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <form>
            <h3>Sign In</h3>
                <div className="login-info">
                <label>Email address</label>
                <input type="email" className="login-parameters" placeholder="Enter email" />
            </div>
            <div className="login-info">
                <label>Password</label>
                <input type="password" className="login-parameters" placeholder="Enter password" />
            </div>
            <button type="submit" className="login-button">Login</button>
            <p className="create-new-account">
                <Link to="/sign-up">Create a new account</Link>
            </p>
        </form>
    )
}

export default Login