import React, { Fragment } from 'react';
import { useContext } from 'react';
import {AppContext} from '../../context/Action';

const Balance = () => {
    const {transactions, darkmode} = useContext(AppContext);
    const total = transactions.map(item => item.amount).reduce((total, num) => parseInt(total)+parseInt(num), 0);
    return (
        <Fragment>
            <div className="balance">
                <h5 style={darkmode ? {color : 'white'} : {color : 'black'}}>Your Balance</h5>
                    <h1 style={darkmode ? {color : 'white'} : {color : 'black'}}>
                        $ {Math.round(total).toFixed(2)}
                    </h1>
            </div>
        </Fragment>
    )
}

export default Balance;