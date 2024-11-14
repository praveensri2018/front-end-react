// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/login'); // Redirect to login page after logout
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
