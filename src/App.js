import React, { useReducer, useEffect } from 'react'
import data from './data/data.json'
import ListBussines from './Bussines'
import Gold from './Gold'
import DataRecover from './DataRecover'
import {  initialState, reducer, actionTypes } from "./Store";

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
            <div className="business-container">
                <ListBussines businessesData={businesses} />
            </div>
            <Gold />
        </div>
        );
}

export default App