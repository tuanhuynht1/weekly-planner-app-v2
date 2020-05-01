import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../GlobalContext';
import {dateTrim, dateToPostgresString, dateToString} from '../services/Dates';
import TodoItem from './TodoItem';
import axios from 'axios';

const Todos = () => {

    const {date,todos, setTodos, token} = useContext(GlobalContext);
    const [input, setInput] = useState('');

    useEffect(() => {
        document.getElementById('add-input').value = '';
    }, [date, todos]);

    const onClickAdd = () => {
        if(input.trim() !== ''){
            const body = {
                pid: 'null',
                text: input,
                assigned_date: dateToPostgresString(date)
            };
            setTodos(prev => [...prev,body]);
            axios
            .post('api/todos',body,{
                headers: {
                    Authorization: token
                }
            })
            .then(res => console.log(res.data))
            .catch(e => console.error(e));
        }
        
    }

    return(
        <div className='todos-container'>
            <h2>{dateToString(date)}</h2>
            <ul>
            {
                todos
                .filter( t => dateTrim(t.assigned_date) === dateToPostgresString(date))
                .map((t,i) => <TodoItem todo={t} key={i}/>)
            }
                <div className='todo-item'>
                    <form onSubmit={ e => {e.preventDefault(); onClickAdd()}}>
                        <input id='add-input' type='text' placeholder='Add new todo...' 
                        onChange={e => setInput(e.target.value)}/>
                        <i className='add fas fa-plus-square fa-2x' onClick={onClickAdd}></i>
                    </form>
                </div>
            </ul>
        </div>
    )
}

export default Todos;