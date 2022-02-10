import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Link, Routes, useNavigate } from 'react-router-dom'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ResetPassword from './Authentication/ResetPassword';
import Home from './Home';
import Profile from './Profile';
import axios from 'axios';

function App() {
const [userAuthToken, setUserAuthToken] = useState(null)
const [userId, setUserId] = useState(null)  
const [loggedIn, setLoggedIn] = useState(false)
const navigate = useNavigate()
const headers = {
  'Content-Type': 'application/json',
}

  const loginRequest = (email, password) => {
    const loginUrl = "http://localhost:8000/grouper/signin"
    axios.post(loginUrl, {email: email, password: password}, { headers: headers})
      .then((res) => {
      setUserAuthToken(res.data)
      console.log(res.data)
      navigate("/home")
    })
    .catch(err => alert("oh shit"))
  }

  const storeId = (email) => {
    const storeIdUrl = `http://localhost:8000/grouper/users/${email}` 
    axios.get(storeIdUrl, {params: {
      email: email
    }}, { headers: headers} )
    .then((res) => {
      setUserId(res.data)
      console.log(res)
      console.log(userId)
    })
    .catch(err => alert("oh shit"))
  }
console.log(userAuthToken)
console.log(loggedIn)

useEffect(() => { 
if(userAuthToken) {
  setLoggedIn(true)
}
}, [userAuthToken])

// if(userAuthToken){
//   return(
//     setLoggedIn(true))}
console.log(`authToken: ${userAuthToken}`)
  return (
    <div>


    <main>
      <Routes>
        <Route path="/login" element= {<Login 
         loginRequest={ loginRequest } 
         storeId={ storeId }
         loggedIn = { loggedIn }
        />}/>
        <Route path="/signup" element = { <SignUp headers={ headers } /> }/>
        <Route path="/reset-password" element={ <ResetPassword/> }/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
