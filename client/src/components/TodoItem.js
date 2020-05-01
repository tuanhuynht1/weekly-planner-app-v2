import React from 'react';

const TodoItem = ({todo}) => {
    return(
        <div className='todo-item'>
            <li>
                {todo.text}
            </li>
        </div>
    )
}

export default TodoItem;