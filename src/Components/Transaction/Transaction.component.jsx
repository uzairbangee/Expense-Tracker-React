import React, { Fragment, useContext } from 'react';
import {AppContext} from '../../context/Action';


const Transaction = ({transaction, index}) => {
    const {dispatch} = useContext(AppContext);

    const deleteAction = () => {
        dispatch({
            type : "DELETE_TRANSACTION",
            payload: {
                id: index
            }
        })
    }

    return (
        <Fragment>
            <li className={transaction.type === 'expense' ? 'minus' : 'plus'}>
                {transaction.text} <span>$ {transaction.amount}</span>
                <button className="delete-btn" onClick={deleteAction}>x</button>
            </li>
        </Fragment>
    )
}

export default Transaction;
