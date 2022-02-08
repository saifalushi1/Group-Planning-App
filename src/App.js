import logo from './logo.svg';
import './App.css';
import {Route, Link, Routes } from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';

function App() {
  return (
    <div>
    <nav className='logo'>
      <Link to="/">
        <h1>Grouper</h1>
      </Link>
    </nav>
    <nav className='options'>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/sign-up" element = {<SignUp/>}/>
      </Routes>
    </main>
  </div>
  );
}

export default App;
