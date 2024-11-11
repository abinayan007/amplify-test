// src/auth.js
const fakeAuth = {
    isAuthenticated: false,
    login(username, password, callback) {
      if (username === 'user' && password === 'password') {
        fakeAuth.isAuthenticated = true;
        setTimeout(callback, 100); // Fake async
      } else {
        alert('Invalid Credentials');
      }
    },
    logout(callback) {
      fakeAuth.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  };
  
  export { fakeAuth };
  