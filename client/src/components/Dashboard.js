import React, {Fragment, useContext, useEffect, useState} from 'react';
import Navbar from './NavBar';
import Todos from './Todos';
import Footer from './Footer';
import { GlobalContext } from '../GlobalContext';

const Dashboard = () => {

    // load all todos as global state
    const {token, date, update, todos} = useContext(GlobalContext);
    

    useEffect(() => {
        update();
    }, [token,date])

    return(
        <Fragment>
            <h1>Dashboard</h1>
            <Navbar/>
            <Todos/>
            <Footer/>
        </Fragment>
    )
}

export default Dashboard;