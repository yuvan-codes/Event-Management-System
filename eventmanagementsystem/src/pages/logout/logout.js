import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./logout.css"

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); 

    navigate('/');
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
