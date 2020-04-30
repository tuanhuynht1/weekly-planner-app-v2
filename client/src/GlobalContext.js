import React, {useState, createContext} from 'react';
import cookie from 'react-cookies';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {

    const token = cookie.load('token');
    const [date, setDate] = useState(new Date());
    const [todos, setTodos] = useState([]);

    return (
        <GlobalContext.Provider 
        value={{
            date: date,
            setDate: setDate,
            token: token,
            todos: todos,
            setTodos: setTodos
        }}>

            {props.children}
        </GlobalContext.Provider>
    );
}
