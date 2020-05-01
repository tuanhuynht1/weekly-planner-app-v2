import React, {useContext} from 'react';
import {GlobalContext} from '../GlobalContext';
import {addDays} from '../services/Dates';

const NavBttn = ({name, day}) => {

    // check if curernt date corespond to button
    const {date, setDate} = useContext(GlobalContext);
    
    const onClick = () => {
        // set date view to whatever button is pressed
        const offset = day - date.getDay();
        setDate(addDays(date,offset));
    } 
    
    if (date.getDay() === day){
        return(
            <button className='selected'>{name}</button>
        )
    }
    else{
        return(
            <button className='nav-bttn' onClick={onClick}>{name}</button>
        )
    }
    
}

export default NavBttn;