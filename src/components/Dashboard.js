// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../auth';

function Dashboard() {
    console.log("dashpage")
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard! Here are some apps you can access:</p>
      <ul>
        <li><a href="#app1">Application 1</a></li>
        <li><a href="#app2">Application 2</a></li>
        <li><a href="#app3">Application 3</a></li>
      </ul>
      <button onClick={() => {
        fakeAuth.logout(() => window.location.href = '/');
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
