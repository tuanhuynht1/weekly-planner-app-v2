import React from 'react';
import NavBttn from './NavBttn';
import cookie from 'react-cookies';

const NavBar = () => {

    const logout = () => {
        // store token in cookie
        cookie.remove('token');
        // refresh page
        window.location = '/';
    }

    return(
        <div className='nav-bar'>
            <NavBttn name='SUN' day={0}/>
            <NavBttn name='MON' day={1}/>
            <NavBttn name='TUE' day={2}/>
            <NavBttn name='WED' day={3}/>
            <NavBttn name='THU' day={4}/>
            <NavBttn name='FRI' day={5}/>
            <NavBttn name='SAT' day={6}/>
            <button className='nav-bttn logout' onClick={logout}>Sign Out</button>
        </div>
    )
}

export default NavBar;