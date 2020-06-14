import React, { Fragment, useState, useContext } from 'react';
import Form from '../Form/Form.components';
import {AppContext} from '../../context/Action';



const TransactionForm = () => {
    const {darkmode} = useContext(AppContext);
    let [type, setType] = useState('income');
    return (
        <Fragment>
            <h3 style={darkmode ? {color : 'white'} : {color : 'black'}}>Add new transaction</h3>
                <div className="form-control">
                    <select name={type} onChange={(e) => setType(e.target.value)}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <Form type={type}/>


        </Fragment>
    )
}

export default TransactionForm;
