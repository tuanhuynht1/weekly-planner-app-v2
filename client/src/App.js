import React, {useState} from 'react';
import cookie from 'react-cookies';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {

  // hooks to access and set access token
  const [accessToken] = useState(cookie.load('token'));
  
  const login = (token) => {
    // store token in cookie
    cookie.save('token',token);
    // refresh page
    window.location = '/';
  }

  const logout = (token) => {
    // store token in cookie
    cookie.remove('token');
    // refresh page
    window.location = '/';
  }


  return (
    accessToken ? <Dashboard logout={logout}/> : <Login login={login}/>
  );
}

export default App;
