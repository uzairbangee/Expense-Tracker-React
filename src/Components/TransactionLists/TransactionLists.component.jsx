import React, { Fragment, useContext } from 'react';
import {AppContext} from '../../context/Action';
import Transaction from "../Transaction/Transaction.component";


const TransactionLists = () => {
    const {transactions, darkmode} = useContext(AppContext);

    return (
        <Fragment>
            <h3 style={darkmode ? {color : 'white'} : {color : 'black'}}>History</h3>
                <ul className="list">
                    {
                        transactions.map((transaction, index ) => <Transaction index={index} key={index} transaction={transaction}/>)
                    }
                </ul>
        </Fragment>
    )
}

export default TransactionLists;
