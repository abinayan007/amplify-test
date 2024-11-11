// src/components/Login.js
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { fakeAuth } from '../auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  const handleLogin = () => {
    fakeAuth.login(username, password, () => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }
  console.log("loginpage")

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
