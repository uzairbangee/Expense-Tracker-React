import Reducer from './Reducer';
import React, { useReducer, createContext, Fragment } from 'react';

const initialState = {
    transactions : [],
    darkmode : false,
}

const AppContext = createContext(initialState);

const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
            <AppContext.Provider value={{
                transactions : state.transactions,
                darkmode : state.darkmode,
                dispatch
                }}>
                {children}
            </AppContext.Provider>

    )
}

export {
    AppContext,
    GlobalState
}
