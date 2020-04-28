import React, {useState} from 'react';
import cookie from 'react-cookies';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {

  // hooks to access and set access token
  const [accessToken, setAccessToken] = useState(cookie.load('token'));

  return (
    accessToken ? <Dashboard/> : <Login/>
  );
}

export default App;
