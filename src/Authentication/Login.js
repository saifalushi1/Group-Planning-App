import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ loginRequest, storeId, loggedIn, loginError }) => {
    const [inputEmailValue, setinputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')
    const navigate = useNavigate()
// const changePage = () => {
//     return(
//         <Link>
//         </Link>
//     )
// }
// const handleChange = (e) => {
//     e.preventDefault()
//     setinputEmailValue(e.target.value)
//     console.log(inputEmailValue)
// }

const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(inputEmailValue, inputPasswordValue)
    loginRequest(inputEmailValue, inputPasswordValue)
    storeId(inputEmailValue)
    // if(loginError){
    //     alert("incorrect password")
    // } else{
    //     navigate("/home")
    // }
}

console.log(inputEmailValue)
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Sign In</h3>
                <div className="login-info">
                <label>Email address</label>
                <input type="email" value={inputEmailValue} className="login-parameters" placeholder="Enter email" onChange={ (e) => setinputEmailValue(e.target.value)} />
            </div>
            <div className="login-info">
                <label>Password</label>
                <input type="password" value={inputPasswordValue} className="login-parameters" placeholder="Enter password" onChange={ (e) => setInputPasswordValue(e.target.value)} />
            </div>
            {/* { ( loggedIn === true ? `/home` : null) } */}
                <input type="submit" value={`submit`} className="login-button" />
                {/*onClick={ (e) => handleSubmit(e) } */}
            <p className="create-new-account">
                <Link to="/signup">Create a new account</Link>
            </p>
            <p className="forgot-password">
               <Link to="/reset-password">Forgot password?</Link>
            </p>
        </form>
    )
}

export default Login