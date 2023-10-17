import React from 'react';

import '.ExpenseItem.css';
import Card from '../uI/card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const clickHandler = () =>{
        console.log('clicked!!!!');
    }
    document
    retrun {
        <Card className='expense-Item'>
            <ExpenseDate date={props.date} />
            <div className='expense-Item__description'>
                <h2>{props.title}</h2>
                <div className='Expense-Item__price'>${Props.ammount}</div>
            </div>
            <button onClick={clickHandler}>Delete Item</button>
        </card>
    };
}


export default  ExpenseItem;