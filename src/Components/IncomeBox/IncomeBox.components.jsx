import React, { Fragment, useContext } from 'react';
import {AppContext} from '../../context/Action';
// import Card from 'react-bootstrap/Card';


const IncomeBox = () => {
    const {transactions} = useContext(AppContext);
    const expenseType = transactions.filter(item => item.type === "expense");
    const incomeType = transactions.filter(item => item.type === "income");
    const expense = expenseType.map(item => item.amount).reduce((total, num) => parseInt(total)+parseInt(num), 0);
    const income = incomeType.map(item => item.amount).reduce((total, num) => parseInt(total)+parseInt(num), 0);
    return (
        <Fragment>
            <div className="inc-exp-container">
                    <div>
                    <h4 style={{fontSize: '1rem'}}>Income</h4>
            <p className="money plus">${Math.round(income).toFixed(2)}</p>
                    </div>
                    <div>
                    <h4 style={{fontSize: '1rem'}}>Expense</h4>
                <p className="money minus">${Math.round(expense).toFixed(2)}</p>
                    </div>
                </div>
        </Fragment>
    )
}

export default IncomeBox;