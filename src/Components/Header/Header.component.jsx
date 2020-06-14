import React, { Fragment, useContext } from 'react';
import "./header.css"
import {AppContext} from '../../context/Action';



const Header = () => {
    const {dispatch, darkmode} = useContext(AppContext);
    console.log(darkmode)
    const changeMode = () => {
        dispatch({
            type: "SET_MODE"
        })
    }

    return (
        <Fragment>
            <div className="header">
                <h2 style={darkmode ? {color : 'white'} : {color : 'black'}}>Expense Tracker</h2>
                    <label class="switch">
                        <input type="checkbox" onChange={changeMode}/>
                        <span class="slider round"></span>
                    </label>
            </div>
            
        </Fragment>
    )
}

export default Header;