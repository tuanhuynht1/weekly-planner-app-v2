import React, {useState, createContext} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {

    // deconstruct user from token
    const decoded = jwt.decode(cookie.load('token'));
    const user = decoded ? decoded.usr : null;

    const [date, setDate] = useState(new Date());

    return (
        <GlobalContext.Provider 
        value={{
            date: date,
            setDate: setDate,
            user : user
        }}>

            {props.children}
        </GlobalContext.Provider>
    );
}
