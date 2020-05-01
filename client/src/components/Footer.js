import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../GlobalContext';
import {dateTrim, dateToPostgresString} from '../services/Dates';

const Footer = () => {
    
    const {todos, date, count, setCount} = useContext(GlobalContext);
    const [total,setTotal] = useState(0);

    useEffect( () => {
        const curr = todos.filter( t => dateTrim(t.assigned_date) === dateToPostgresString(date));
        setTotal(curr.length);
        setCount(curr.reduce((sum,t) => t.completed ? sum + 1 : sum,0));        
    }, [todos,date]);
    
    let ratio = 0;
	if (total !== 0){
		ratio = count / total;
	}
	const progressBarStyle = ratio === 1 ? 
		{width:'100%',backgroundColor:'limegreen'} : {width : `calc(${ratio} * 100%)`};

	return (
		<div className='footer'>
			<div className='progress-bar-container'>
				<div className='progress-bar' style={progressBarStyle}></div>
			</div>
            <span>{count}/{total}</span>
		</div>
	);
};

export default Footer;