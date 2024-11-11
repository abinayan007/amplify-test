// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { fakeAuth } from './auth';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// function App() {
//   return (
//     // <Home/>
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" exact component={Home} />
//           <Route path="/login" component={Login} />
//           {/* <Route>
//             <PrivateRoute path="/dashboard">
//               <Dashboard />
//             </PrivateRoute>
//           </Route> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Private Route for Dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
