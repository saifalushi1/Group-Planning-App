import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes } from 'react-router-dom'
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import ResetPassword from './Authentication/ResetPassword';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div>
  

    <main>
      <Routes>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/sign-up" element = {<SignUp/>}/>
        <Route path="/reset-password" element={ <ResetPassword/> }/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
