import React, {Fragment, useContext} from 'react';
import Navbar from './NavBar';
import Todos from './Todos';
import Footer from './Footer';

const Dashboard = ({logout}) => {


    return(
        <Fragment>
            <h1>Dashboard</h1>
            <Navbar logout={logout}/>
            <Todos/>
            <Footer/>
        </Fragment>
    )
}

export default Dashboard;