import React, {useState} from 'react';
import cookie from 'react-cookies';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {GlobalProvider} from './GlobalContext';


function App() {

  // hooks to access and set access token
  const [accessToken] = useState(cookie.load('token'));
  
  const login = (token, user) => {
    // store token and user in cookie
    cookie.save('token',token);
    // refresh page
    window.location = '/';
  }

  const logout = () => {
    // store token in cookie
    cookie.remove('token');
    // refresh page
    window.location = '/';
  }


  return (
    <GlobalProvider>
      {accessToken ? <Dashboard logout={logout}/> : <Login login={login}/>}
    </GlobalProvider>
  );
}

export default App;
