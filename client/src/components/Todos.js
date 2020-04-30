import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../GlobalContext';
import {dateTrim, dateToPostgresString} from '../services/Dates';

const Todos = () => {

    const {date,todos} = useContext(GlobalContext);

    return(
        <div className='todos-container'>
            <ul>
                {
                    todos
                    .filter( t => dateTrim(t.assigned_date) === dateToPostgresString(date))
                    .map((t,i) => <li key={i}>{t.text}</li>)
                }
            </ul>
        </div>
    )
}

export default Todos;