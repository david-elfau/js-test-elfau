import React from "react";

export const initialState = {
    "gold": 100,
    "businesses": [
        {
            "level": 1,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        },
        {
            "level": 0,
            "timestamp": -1,
            "managerHired": false
        }
    ] 
};

export const reducer = (state, action) => {

    return { gold: state.gold + action.value };
    
};

export const Context = React.createContext();
