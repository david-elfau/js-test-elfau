import React, { useReducer, useEffect } from 'react'
import Business from './businessParts/Business'
import Gold from './Gold'
import GoldInIdle from './GoldInIdle'
import DataRecover from './helpers/DataRecover'
import { initialState, reducer, actionTypes } from './helpers/Store';
import data from './data/data.json'

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