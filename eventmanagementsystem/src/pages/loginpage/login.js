import React, { useState } from 'react';
import "./login.css"
import { UserBase } from "../../utils/UserDatabase";
import logo from './Eventdrop.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Login = ()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = UserBase.find((user) => user.username === username && user.password === password);

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/list');
      }
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const createaccount = (event) =>{
    event.preventDefault();
    navigate('/create');
  }

  return (
    <>
    <div id="main">
    <div class="hero">
    <div class="header">
    <img src={logo} alt="Logo" />
    </div>
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div class="account-creation">
        <h3>Dont have an account?</h3>
        <button class='create' onClick={createaccount}>Click here to Sign Up now!</button>
      </div>
      
    </div>
    </div>
    <div class="footer">
      <h2>EVENTDROP</h2>
      <p>Unlock the potential of tech events in your area with our dynamic platform, dedicated 
        to curating and managing innovative experiences that not only enhance your skills and 
        expand your knowledge but also introduce you to groundbreaking technologies and activities 
        you've never encountered before. Join us to transform your learning journey and connect with 
        like-minded enthusiasts in an environment that fosters growth, creativity, and unparalleled opportunities.
      </p>
      <p>Find us Here!</p>
      <ul>
        <li><a href="https://x.com/?lang=en"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
        <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
        <li><a href="https://www.instagram.com/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
      </ul>
      </div>
      </div>
    </>
  );
}

export default Login;
