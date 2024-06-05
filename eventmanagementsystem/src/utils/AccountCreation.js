import React, { useState } from 'react';
import "./AccountCreation.css";
import { UserBase } from './UserDatabase';
import { useNavigate } from 'react-router-dom';
import logo from '../pages/loginpage/Eventdrop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Create = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password || !conpassword) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (password !== conpassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (UserBase.some(user => user.username === username)) {
            setErrorMessage('Username already exists.');
            return;
        }

        const role = "user";

        UserBase.push({ username, password, role });

        navigate('/login');
    };

    const signIn = (e) =>{
        e.preventDefault();
        navigate('/');
    }

    return (
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
                        <label htmlFor="conpassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="conpassword"
                            value={conpassword}
                            onChange={(e) => setConpassword(e.target.value)}
                        />
                        <button type="submit">Create Account</button>
                    </form>
                    <div class='signIn'>
                        <h3>Already have an account?</h3>
                        <button class='signIn' onClick={signIn}>Click here to Sign In!</button>
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

    )
}

export default Create;
