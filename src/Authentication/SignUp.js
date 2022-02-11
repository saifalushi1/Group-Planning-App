import axios from "axios";
import React, { useState } from "react";
import {
    FormGroup,
    Input,
    Label,
    FormFeedback,
    Form,
  } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ headers }) => {
    const [newEmail, setNewEmail] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [newName, setNewName] = useState(null)
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/grouper/signup", {
            name: newName,
            email: newEmail,
            password: newPassword
        }, {headers: headers})
        .then(res => navigate("/login"))
    }
    console.log(newEmail)
    console.log(newPassword)
    console.log(newName)
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>
        <div className="sign-in-info">
            <label>Name</label>
            <input type="text" className="firstName" placeholder="Full Name" onChange={ (e) => setNewName(e.target.value) }/>
        </div>
        <div className="sign-in-info">
            <label>Email address</label>
            <input type="email" className="email" placeholder="Enter email" onChange={ (e) => setNewEmail(e.target.value) }/>
        </div>
        <div className="sign-in-info">
            <label>Password</label>
            <input type="password" className="password" placeholder="Enter password" onChange={ (e) => setNewPassword(e.target.value) }/>
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
        <p className="login">
            Already registered <Link to="/">sign in?</Link>
        </p>
    </form>
//     <Form onSubmit={(e) => handleSubmit(e)} >
//     <FormGroup>
//       <Label for="signUpEmail">Email</Label>
//       <Input
//         type="text"
//         className="signUp-parameters"
//         placeholder="Enter Your Name"
//         onChange={ (e) => setNewName(e.target.value) }
//       />
//       <FormFeedback valid></FormFeedback>
//       </FormGroup>
//       <FormGroup>
//         <Label for="signUpEmail">Email</Label>
//         <Input 
//           type="email"
//           className="signUp-parameters"
//           placeholder="Enter Your Email"
//           onChange={ (e) => setNewEmail(e.target.value) }      
//         />
//         <FormFeedback valid></FormFeedback>
//     </FormGroup>
//      <FormGroup>
//         <Label for="signUpPassword">Password</Label>
//         <Input 
//           type="password"
//           className="signUp-parameters"
//           placeholder="Enter Your Password"
//           onChange={ (e) => setNewEmail(e.target.value) }      
//         />
//         <FormFeedback valid></FormFeedback>
//     </FormGroup>
//    <button type="submit" className="sign-up-button">Sign Up</button>
//       <p className="create-new-account">
//           <Link to="/">Already Have An Account? Login</Link>
//       </p>
//       <p className="forgot-password">
//         <Link to="/reset-password">Forgot password?</Link>
//       </p>
//   </Form>
    )
}

export default SignUp