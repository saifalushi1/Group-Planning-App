import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ResetPassword from './Authentication/ResetPassword';
import Home from './Home';
import Profile from './User/Profile';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpinnerComponent from './Side_components/Spinner';

const App = () => {
  const [userAuthToken, setUserAuthToken] = useState('')
  const [userId, setUserId] = useState('')  
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoginInfoIncorrect, setIsLoginInfoIncorrect] = useState(false)
  const navigate = useNavigate()
  const headers = {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${localStorage.getItem("JWT")}`
  }

  const loginRequest = (email, password) => {
    const loginUrl = "https://protected-hollows-70202.herokuapp.com/grouper/signin"
    axios.post(loginUrl, {email: email, password: password}, { headers: headers})
      .then((res) => {
      setUserAuthToken(res.data)
      localStorage.setItem("JWT", res.data.token)
      setIsLoginInfoIncorrect(false)
      navigate("/home")
    })
    .catch(err => setIsLoginInfoIncorrect(true))
  }


  const storeId = async (email) => {
    const storeIdUrl = `https://protected-hollows-70202.herokuapp.com/grouper/users/${email}` 
    await axios.get(storeIdUrl, {params: {
      email: email
    }}, { headers: headers} )
    .then((res) => {
        setUserId(res.data)
        localStorage.setItem("UUID", res.data._id)
    })
    .catch(err => console.log(err))
  }

useEffect(() => { 
if(userAuthToken) {
  setLoggedIn(true)
}
}, [userAuthToken])

  return (
    <main>
      <Routes>
        <Route path="/" element= {<Login 
         loginRequest={ loginRequest } 
         storeId={ storeId }
         loggedIn = { loggedIn }
         isLoginInfoIncorrect={ isLoginInfoIncorrect }
         userId={ userId }
         userAuthToken={ userAuthToken }
        />}/>
        <Route path="/signup" element = { <SignUp headers={ headers } /> }/>
        <Route path="/resetPassword" element={ <ResetPassword/> }/>
        <Route path="/home" element={<Home headers={ headers } user={ userId } />}/>
        <Route path="/profile" element={ <Profile userInfo={ userId } headers={ headers } /> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/loading" element={<SpinnerComponent /> } />

      </Routes>
    </main>
  );
}

export default App
