import React from "react";

export const initialState = { gold: 0 };

export const reducer = (state, action) => {

    return { gold: state.gold + action.value };
    
};

export const Context = React.createContext();
