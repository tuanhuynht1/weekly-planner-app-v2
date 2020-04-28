import React, {Fragment} from 'react';
import Navbar from './NavBar';
import Todos from './Todos';
import Footer from './Footer';

const Dashboard = () => {
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