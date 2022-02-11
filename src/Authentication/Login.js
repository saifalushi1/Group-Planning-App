import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Form,
  FormText,
} from "reactstrap";
import CheckInput from "./CheckInput";

const Login = ({ loginRequest, storeId, isLoginInfoIncorrect }) => {
  const [inputEmailValue, setinputEmailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const navigate = useNavigate();

  const checkInput = () => {
    if (isLoginInfoIncorrect === false) {
      return (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              value={inputEmailValue}
              className="login-parameters"
              placeholder="Enter email"
              onChange={(e) => setinputEmailValue(e.target.value)}
              valid
            />
            <FormFeedback valid></FormFeedback>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input 
                type="password"
                value={inputPasswordValue}
                className="login-parameters"
                placeholder="Enter password"
                onChange={(e) => setInputPasswordValue(e.target.value)}       
              />
              <FormFeedback valid></FormFeedback>
            </FormGroup>
          </FormGroup>
        </Form>
      )
    } else {
      return (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              value={inputEmailValue}
              className="login-parameters"
              placeholder="Enter email"
              onChange={(e) => setinputEmailValue(e.target.value)}
              invalid
            />
            <FormFeedback valid></FormFeedback>
              </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input 
                type="password"
                value={inputPasswordValue}
                className="login-parameters"
                placeholder="Enter password"
                onChange={(e) => setInputPasswordValue(e.target.value)}       
              />
              <FormFeedback invalid></FormFeedback>
          </FormGroup>
        </Form>
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputEmailValue, inputPasswordValue);
    loginRequest(inputEmailValue, inputPasswordValue);
    storeId(inputEmailValue);
    // if(loginError){
    //     alert("incorrect password")
    // } else{
    //     navigate("/home")
    // }
  };

//   console.log(inputEmailValue);
  console.log(isLoginInfoIncorrect)
  return (
    //   <>
    // <form onSubmit={(e) => handleSubmit(e)}>
    //   <h3>Sign In</h3>
    //   <div className="login-info">
    //     <label>Email address</label>
    //     <input
    //       type="email"
    //       value={inputEmailValue}
    //       className="login-parameters"
    //       placeholder="Enter email"
    //       onChange={(e) => setinputEmailValue(e.target.value)}
    //       />
    //   </div>
    //   <div className="login-info">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       value={inputPasswordValue}
    //       className="login-parameters"
    //       placeholder="Enter password"
    //       onChange={(e) => setInputPasswordValue(e.target.value)}
    //       />
    //   </div>
    //   {/* { ( loggedIn === true ? `/home` : null) } */}
    //   <input type="submit" value={`submit`} className="login-button" />
    //   {/*onClick={ (e) => handleSubmit(e) } */}
    //   <p className="create-new-account">
    //     <Link to="/signup">Create a new account</Link>
    //   </p>
    //   <p className="forgot-password">
    //     <Link to="/reset-password">Forgot password?</Link>
    //   </p>
          
    // </form>
    // </>
    (isLoginInfoIncorrect === false ? <Form onSubmit={(e) => handleSubmit(e)} >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              value={inputEmailValue}
              className="login-parameters"
              placeholder="Enter email"
              onChange={(e) => setinputEmailValue(e.target.value)}
            />
            <FormFeedback valid></FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input 
                type="password"
                value={inputPasswordValue}
                className="login-parameters"
                placeholder="Enter password"
                onChange={(e) => setInputPasswordValue(e.target.value)}       
              />
              <FormFeedback valid></FormFeedback>
          </FormGroup>
          <input type="submit" value={`submit`} className="login-button" />
            <p className="create-new-account">
                <Link to="/signup">Create a new account</Link>
            </p>
            <p className="forgot-password">
              <Link to="/reset-password">Forgot password?</Link>
            </p>
        </Form>
        :
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              value={inputEmailValue}
              className="login-parameters"
              placeholder="Enter email"
              onChange={(e) => setinputEmailValue(e.target.value)}
              invalid
            />
            <FormFeedback valid></FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input 
                type="password"
                value={inputPasswordValue}
                className="login-parameters"
                placeholder="Enter password"
                onChange={(e) => setInputPasswordValue(e.target.value)} 
                invalid      
              />
              <FormFeedback invalid>User Email or Password Is Incorrect</FormFeedback>
          </FormGroup>
            <input type="submit" value={`submit`} className="login-button" />
            <p className="create-new-account">
                <Link to="/signup">Create a new account</Link>
            </p>
            <p className="forgot-password">
              <Link to="/reset-password">Forgot password?</Link>
            </p>
        </Form>)
    // </> 
  );
};

export default Login;
