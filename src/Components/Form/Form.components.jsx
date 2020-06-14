import React, { Fragment, useState, useContext } from 'react';
import {AppContext} from '../../context/Action';

const Form = (props) => {
    const {dispatch, darkmode} = useContext(AppContext);
    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);

    const checkValidations = () => {
        if(!text)
            return false;
        if(amount <= 0)
            return false;

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(checkValidations());
        if(checkValidations() === true){
            const transaction = {
                text: text,
                amount: props.type === "income" ? amount : -amount,
                type: props.type
            }

            dispatch({
                type: "ADD_TRANSACTION",
                payload : {
                    transaction : transaction
                }
            })
        }
    }

    return (
        <Fragment>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="text" style={darkmode ? {color : 'white'} : {color : 'black'}}>Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                style={darkmode ? {color : 'white'} : {color : 'black'}}>Amount <br />
                {props.type}
                </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <div className="form-control">
                <button type="submit" className="btn btn-dark">Add {props.type}</button>
            </div>
        </form>
        </Fragment>
    )
}

export default Form;