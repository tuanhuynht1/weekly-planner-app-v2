import React, {useContext} from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {GlobalContext} from './GlobalContext';


function App() {

  const {token} = useContext(GlobalContext);
  return (
      token ? <Dashboard/> : <Login/>
  );
}

export default App;
