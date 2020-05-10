import React from "react";

export const actionTypes = {
    GoldUpdate: 'GoldUpdate',
    LevelUpgrade: 'LevelUpgrade',
    HireManager: 'HireManager',
    StartProduction: 'StartProduction',
    EndProduction: 'EndProduction',
    ReduceTimer: 'ReduceTimer',
    LoadData: 'LoadData'
}


export const initialState = {
    "gold": 150,
    "lastConnectedTimestam": -1,
    "businesses": [
        {
            "level": 1,
            "timestamp": -1,
            "managerHired": true
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

    //console.log("Action:" + action.type + " Value:" + action.value);
    //console.log(state);
    switch (action.type) {
        case actionTypes.GoldUpdate:      
            return { gold: state.gold + action.value, businesses: state.businesses };

        case actionTypes.LevelUpgrade:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].level++;
            return { gold: state.gold, businesses: newBusinesses, lastConnectedTimestam: Date.now() };

        case actionTypes.HireManager:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].managerHired=true;
            return { gold: state.gold, businesses: newBusinesses, lastConnectedTimestam: Date.now()  };

        case actionTypes.StartProduction:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].timestamp = Date.now();
            return { gold: state.gold, businesses: newBusinesses, lastConnectedTimestam: Date.now() };

        case actionTypes.EndProduction:
            var newBusinesses = state.businesses;
            newBusinesses[action.value].timestamp = -1;
            return { gold: state.gold, businesses: newBusinesses, lastConnectedTimestam: Date.now() };

        case actionTypes.ReduceTimer:
            return { gold: state.gold, businesses: state.businesses, lastConnectedTimestam: Date.now() };
        case actionTypes.LoadData:
            console.log("LOAD COOKIE")
            return state;
    }
    return  state;
};

export const Context = React.createContext();
