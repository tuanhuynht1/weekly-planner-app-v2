import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../GlobalContext';
import {dateTrim, dateToPostgresString, dateToString} from '../services/Dates';
import TodoItem from './TodoItem';

const Todos = () => {

    const {date,todos} = useContext(GlobalContext);

    return(
        <div className='todos-container'>
            <h2>{dateToString(date)}</h2>
            <ul>
            {
                todos
                .filter( t => dateTrim(t.assigned_date) === dateToPostgresString(date))
                .map((t,i) => <TodoItem todo={t} key={i}/>)
            }
            </ul>
        </div>
    )
}

export default Todos;