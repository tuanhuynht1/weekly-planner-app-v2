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
        .catch( e => setMssg('Invalid Credentials'));
    }

    const signup = () => {
        if(usr.trim() === '' || pwd.trim() === ''){
            setMssg('All fields must be filled');
            return;
        }
        axios
        .post('api/auth/register',{
            usr: usr,
            pwd: pwd
        })
        .then(res => {
            setMssg('Sign up success! You can now sign in!');
            document.getElementById('usr').value = '';
            document.getElementById('pwd').value = '';
        })
        .catch( (e) => setMssg('Username already taken'));
    }


    return(
        <div className='login-page'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={e => login(e)}>
                <input id='usr' type='text' autoComplete='off' placeholder='username' onChange={e => setUsr(e.target.value)}/>
                <input id='pwd' type='password' autoComplete='off' placeholder='password' onChange={e => setPwd(e.target.value)}/>
                <button type='submit'>sign in</button>
            </form>
            <button onClick={signup}>sign up</button>
            <p>{mssg}</p>
        </div>
    )
}

export default Login;