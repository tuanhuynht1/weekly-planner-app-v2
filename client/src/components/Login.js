import React, {Fragment, useState} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

const Login = () => {

    const [usr, setUsr] = useState('');
    const [pwd, setPwd] = useState('');
    const [mssg, setMssg] = useState('');

    const login = (e) => {
        e.preventDefault();
        if(usr.trim() === '' || pwd.trim() === ''){
            setMssg('All fields must be filled');
            return;
        }
        // call login api to recieve access token
        axios
        .post('api/auth/login',{
            usr: usr,
            pwd: pwd
        })
        .then(res => {
            // gets authenticated token
            cookie.save('token',res.data);
            window.location = '/';
        })
        .catch(e => {
            console.error(e);
            setMssg('Invalid username or password');
        });
    }


    return(
        <Fragment>
            <h1>Login</h1>
            <form className='login-form' onSubmit={e => login(e)}>
                <input type='text' onChange={e => setUsr(e.target.value)}/>
                <input type='password' onChange={e => setPwd(e.target.value)}/>
                <button type='submit'>sign in</button>
            </form>
            <p>{mssg}</p>
        </Fragment>
    )
}

export default Login;