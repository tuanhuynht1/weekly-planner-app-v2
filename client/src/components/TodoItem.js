import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import {GlobalContext} from '../GlobalContext';

const TodoItem = ({todo, remove}) => {

    const [complete, toggle] = useState(todo.completed);
    const {token, setCount, date} = useContext(GlobalContext);

    const onCheck = () => {
        toggle(prev => !prev);
        if (complete){
            setCount(prev => prev-1);
        }
        else{
            setCount(prev => prev+1);
        }
        axios
        .put(`api/todos/${todo.tid}`,{},{
            headers: {
                Authorization: token
            }
        })
        .catch(e => console.error(e.response.data));
    }

    useEffect(() => {
        toggle(todo.completed);
    }, [date]);

    return(
        <div className='todo-item'>
            { !complete ?
                <li>
                    <i className="fas fa-times-circle delete" onClick={() => remove(todo.tid)}></i>
                    <span className='todo-text'>{todo.text}</span>
                    <i className="far fa-square fa-2x uncomplete" onClick={onCheck}></i>
                </li>
            :
                <li>
                    <i className="fas fa-times-circle delete" onClick={() => remove(todo.tid)}></i>
                    <span className='todo-text crossed-out'>{todo.text}</span>
                    <i className="fas fa-check-square fa-2x complete" onClick={onCheck}></i>
                </li>
            }
        </div>
    )
}

export default TodoItem;