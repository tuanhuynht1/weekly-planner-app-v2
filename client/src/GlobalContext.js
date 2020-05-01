import React, {useState, createContext} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {

    const token = cookie.load('token');
    const [date, setDate] = useState(new Date());
    const [todos, setTodos] = useState([]);
    const [count,setCount] = useState(0);

    const update = () => {
        axios
        .get('api/todos', {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
            // console.log(res.data);
            setTodos(res.data);
        })
        .catch( e => console.error(e.response.data));
    }

    return (
        <GlobalContext.Provider 
        value={{
            date: date,
            setDate: setDate,
            token: token,
            todos: todos,
            setTodos: setTodos,
            update: update,
            count: count,
            setCount: setCount
        }}>

            {props.children}
        </GlobalContext.Provider>
    );
}
