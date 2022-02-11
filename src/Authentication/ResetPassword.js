import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    return(
        <form>
        <h3>Reset Password</h3>
        <div className="resetPassword-email">
            <label>Email address</label>
            <input type="email" className="email" placeholder="Enter email" />
        </div>
        <button type="submit" className="reset-button">Reset Password</button>
        <p className="login">
            Already registered <Link to="/">sign in?</Link>
        </p>
    </form>
    )
}

export default ResetPassword