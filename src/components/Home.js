// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    console.log("homepage")
  return (
    <React.Fragment>
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* <Link to="/login">
        <button>Login</button>
      </Link> */}
    </div>
    </React.Fragment>
  );
}

export default Home;
