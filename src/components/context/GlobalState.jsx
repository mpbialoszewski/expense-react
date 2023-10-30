import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state 

const initialState = {
    transactions: [
   ]
};

//Export data as create context
export const GlobalContext = createContext(initialState);

// Provider component 
export const GlobalProvider = ({ children })=>{

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }



    // reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Return value of component 
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

};
