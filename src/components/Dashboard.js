// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Retrieve the user's name from localStorage
  const userName = localStorage.getItem('userName');

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard, {userName ? userName : 'Guest'}</h2>
      <p>This is the dashboard page. You are logged in!</p>
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default Dashboard;
