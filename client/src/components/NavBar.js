import React from 'react';

const NavBar = ({logout}) => {
    return(
        <div className='nav-bar'>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default NavBar;