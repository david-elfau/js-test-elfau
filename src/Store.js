import React from "react";

import Cookies from 'universal-cookie';

export const actionTypes = {
    GoldUpdate: 'GoldUpdate',
    LevelUpgrade: 'LevelUpgrade',
    HireManager: 'HireManager',
    StartProduction: 'StartProduction',
    EndProduction: 'EndProduction',
    ReduceTimer: 'ReduceTimer',
    LoadData: 'LoadData',
    AddGoldEarnIdle: 'AddGoldEarnIdle',
    SetBusinessState: "SetBusinessState"
}



export const reducer = (state, action) => {

    const cookies = new Cookies();

    var newBusinesses;
    switch (action.type) {
        case actionTypes.GoldUpdate:
            cookies.set('data', JSON.stringify({
                gold: state.gold + action.value,
                businesses: state.businesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000});

            return {
                gold: state.gold + action.value,
                businesses: state.businesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };


        case actionTypes.LevelUpgrade:
            newBusinesses = state.businesses;
            newBusinesses[action.value].level++;

            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };

        case actionTypes.HireManager:
            newBusinesses = state.businesses;
            newBusinesses[action.value].managerHired = true;

            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };

        case actionTypes.StartProduction:         
            newBusinesses = state.businesses;

            if (action.aux != null) {
                //Force a starting production time for the recovery option
                newBusinesses[action.value].timestamp = action.aux;
            } else {
                newBusinesses[action.value].timestamp = Date.now();
            }

            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };

        case actionTypes.EndProduction:
            newBusinesses = state.businesses;
            newBusinesses[action.value].timestamp = -1;

            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };
        case actionTypes.AddGoldEarnIdle:
            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: state.businesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle + action.value
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: state.businesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle + action.value
            };

        case actionTypes.ReduceTimer:
            return {
                gold: state.gold,
                businesses: state.businesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }; 

        case actionTypes.SetBusinessState:
            newBusinesses = state.businesses;
            newBusinesses[action.value].level = action.level;
            newBusinesses[action.value].managerHired = action.managerHired;

            cookies.set('data', JSON.stringify({
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            }), { path: '/', maxAge: 31536000 });

            return {
                gold: state.gold,
                businesses: newBusinesses,
                lastConnectedTimestam: Date.now(),
                goldEarnIdle: state.goldEarnIdle
            };

    }
    return  state;
};

export const Context = React.createContext();



export const initialState = {
    "gold": 0,
    "lastConnectedTimestam": -1,
    "goldEarnIdle": 0,
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