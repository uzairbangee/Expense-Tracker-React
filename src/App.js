import React, { Fragment, useContext }  from 'react';
import Tracker from './Components/Tracker/Tracker.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { GlobalState, AppContext } from './context/Action';

function App() {
  // const {darkmode} = useContext(AppContext);
  // console.log(AppContext)
  return (
    <GlobalState>
      <Fragment>
        <Tracker/>
      </Fragment>
    </GlobalState>
  );
}

export default App;
