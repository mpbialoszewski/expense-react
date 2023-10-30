import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state 

const initialState = {
    transactions: [
        { id: 1, text: 'Diablo IV', amount: -69.99 },
        { id: 2, text: 'Aldi weekly shopping', amount: -68.42},
        { id: 3, text: 'Monster Ultra 4 pack', amount: -4.50},
    {id: 4, text: 'Income', amount: 358.30} 
   ]
};

//Export data as create context
export const GlobalContext = createContext(initialState);

// Provider component 
export const GlobalProvider = ({ children })=>{

    // reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Return value of component 
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)

};
