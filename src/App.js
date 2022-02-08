import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes } from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';
import ResetPassword from './ResetPassword';
import Home from './Home';

function App() {
  return (
    <div>
    <div className='logo'>
        <h1>Grouper</h1>
    </div>

    <main>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/sign-up" element = {<SignUp/>}/>
        <Route path="/reset-password" element={ <ResetPassword/> }/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </main>
  </div>
  );
}

export default App;
