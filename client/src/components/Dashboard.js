import React, {Fragment, useContext, useEffect} from 'react';
import Navbar from './NavBar';
import Todos from './Todos';
import Footer from './Footer';
import { GlobalContext } from '../GlobalContext';
import axios from 'axios';

const Dashboard = () => {

    // load all todos as global state
    const {token, setTodos} = useContext(GlobalContext);

    useEffect(() => {
        axios
        .get('api/todos', {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
            // console.log(res.data);
            setTodos(res.data);
        })
        .catch( e => console.error(e));
    }, [token,setTodos])

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