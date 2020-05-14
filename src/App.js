import React, { useReducer, useEffect } from 'react'
import data from './data/data.json'
import Business from './BusinessParts/Business'
import Gold from './Gold'
import GoldInIdle from './GoldInIdle'
import DataRecover from './DataRecover'
import {  initialState, reducer, actionTypes } from './Store';

function App(props) {

    const [store, dispatch] = useReducer(reducer, initialState);
    const businesses = data.businesses;

    useEffect(() => {
        //Keep updating
        const intervalId = setInterval(() => {
            dispatch({ type: actionTypes.ReduceTimer });
        }, 100);

        return () => clearInterval(intervalId);
    },[]);

    return (
        <div className="container">
            <DataRecover businessesData={businesses} />            
            <Business businessesData={businesses} />
            <Gold />
            <GoldInIdle />
        </div>
        );
}

export default App