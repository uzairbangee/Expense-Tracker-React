import React, { Fragment }  from 'react';
import Tracker from './Components/Tracker/Tracker.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { GlobalState } from './context/Action';

function App() {

  return (
    <GlobalState>
      <Fragment>
        <Tracker/>
      </Fragment>
    </GlobalState>
  );
}

export default App;
