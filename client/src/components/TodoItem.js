import React, {useState, useContext} from 'react';
import axios from 'axios';
import {GlobalContext} from '../GlobalContext';

const TodoItem = ({todo}) => {

    const [complete, toggle] = useState(todo.completed);
    const {token} = useContext(GlobalContext);

    const onClick = () => {
        toggle(prev => !prev);
        axios
        .put(`api/todos/${todo.tid}`,{},{
            headers: {
                Authorization: token
            }
        })
        .then(res => console.log(res.data)) 
        .catch(e => console.error(e.response.data));
    }

    return(
        <div className='todo-item'>
            { !complete ?
                <li>
                    <span className='todo-text'>{todo.text}</span>
                    <i className="far fa-square fa-2x uncomplete" onClick={onClick}></i>
                </li>
            :
                <li>
                    <span className='todo-text crossed-out'>{todo.text}</span>
                    <i className="fas fa-check-square fa-2x complete" onClick={onClick}></i>
                </li>
            }
        </div>
    )
}

export default TodoItem;