import React from "react";

export const actionTypes = {
    GoldUpdate: 'GoldUpdate',
    LevelUpgrade: 'LevelUpgrade',
    HireManager: 'HireManager',
    StartProduction: 'StartProduction',

}


export const initialState = {
    "gold": 100000,
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

    console.log("Action:" + action.type + "Value:" + action.value);
    console.log(state);
    switch (action.type) {
        case actionTypes.GoldUpdate:      
            return { gold: state.gold + action.value, businesses: state.businesses };

        case actionTypes.LevelUpgrade:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].level++;
            return { gold: state.gold, businesses: newBusinesses };

        case actionTypes.HireManager:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].managerHired=true;
            return { gold: state.gold, businesses: newBusinesses };

        case actionTypes.StartProduction:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].timestamp = Date.now() ;
            return { gold: state.gold, businesses: newBusinesses };


    }
    return  state;
};

export const Context = React.createContext();
