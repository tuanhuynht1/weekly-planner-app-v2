import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';


const Login = ({login}) => {

    const [usr, setUsr] = useState('');
    const [pwd, setPwd] = useState('');
    const [mssg, setMssg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(usr.trim() === '' || pwd.trim() === ''){
            setMssg('All fields must be filled');
            return;
        }
        // call login api to recieve access token
        axios
        .post('/user/login',{
            usr: usr,
            pwd: pwd
        })
        .then(res => {
            console.log(res.data);
            login(res.data);
        })
        .catch(e => {
            console.error(e);
            setMssg('Invalid username or password');
        });
    }


    return(
        <Fragment>
            <h1>Login Page</h1>
            <form className='login-form' onSubmit={e => onSubmit(e)}>
                <input type='text' onChange={e => setUsr(e.target.value)}/>
                <input type='password' onChange={e => setPwd(e.target.value)}/>
                <button type='submit'>sign in</button>
            </form>
            <p>{mssg}</p>
        </Fragment>
    )
}

export default Login;