import React, { Fragment, useContext } from 'react';
import {AppContext} from '../../context/Action';
import IncomeBox from '../IncomeBox/IncomeBox.components';
import Header from '../Header/Header.component';
import Balance from '../Balance/Balance.component';
import TransactionLists from '../TransactionLists/TransactionLists.component';
import TransactionForm from '../TransactionForm/TransactionForm.component';




const Tracker = () => {
    const {darkmode} = useContext(AppContext);
    console.log(darkmode)

    return (
        <Fragment>
            <div id="main" style={darkmode ? {backgroundColor : 'black'} : {backgroundColor : 'white'}}>
                <Header/>
                <Balance/>
                <IncomeBox/>
                <TransactionLists/>
                <TransactionForm/>
            </div>
        </Fragment>
    )
}

export default Tracker;