import React, {useState, useEffect, useContext, createContext} from 'react';
import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ResetPassword from './Authentication/ResetPassword';
import Home from './Home';
import EventsThatDay from './Side_components/EventsThatDay';
import Profile from './User/Profile';
import GroupCalendars from './GroupCalendars';
import About from './About';
import Contact from './Contact';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpinnerComponent from './Side_components/Spinner';

function App() {
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
    const loginUrl = "http://localhost:8000/grouper/signin"
    axios.post(loginUrl, {email: email, password: password}, { headers: headers})
      .then((res) => {
      setUserAuthToken(res.data)
      localStorage.setItem("JWT", res.data.token)
      setIsLoginInfoIncorrect(false)
      console.log(res.data)
      navigate("/home")
    })
    .catch(err => setIsLoginInfoIncorrect(true))
  }


  const storeId = async (email) => {
    const storeIdUrl = `http://localhost:8000/grouper/users/${email}` 
    await axios.get(storeIdUrl, {params: {
      email: email
    }}, { headers: headers} )
    .then((res) => {
        setUserId(res.data)
        localStorage.setItem("UUID", res.data._id)
      console.log(res)
      console.log(userId)
    })
    .catch(err => console.log(err))
  }

useEffect(() => { 
if(userAuthToken) {
  setLoggedIn(true)
}
}, [userAuthToken])

// if(userAuthToken){
//   return(
//     setLoggedIn(true))}
console.log(`authToken: ${userAuthToken.token}`)
console.log(userId)
console.log(headers)
  return (
    <div>

    <main>
      <Routes>
        <Route path="/" element= {<Login 
         loginRequest={ loginRequest } 
         storeId={ storeId }
         loggedIn = { loggedIn }
         isLoginInfoIncorrect={ isLoginInfoIncorrect }
        />}/>
        <Route path="/signup" element = { <SignUp headers={ headers } /> }/>
        <Route path="/resetPassword" element={ <ResetPassword/> }/>
        <Route path="/home" element={<Home headers={ headers } user={ userId } />}/>
        <Route path="/profile" element={ <Profile userInfo={ userId } headers={ headers } /> }/>
        <Route path="/group-calendars" element={ <GroupCalendars user={ userId} headers = {headers}/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/loading" element={<SpinnerComponent /> } />
        {/* <Route path="/test" element={ <EventsThatDay /> }/> */}

      </Routes>
    </main>
  </div>
  );
}

export default App
