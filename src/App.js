    import React, { useReducer, useEffect } from 'react'
import data from './data/data.json'
import ListBussines from './Bussines'
import Gold from './Gold'
import DataRecover from './DataRecover'
import { Context, initialState, reducer, actionTypes } from "./Store";

function App(props) {

    const [store, dispatch] = useReducer(reducer, initialState);
    const businesses = data.businesses;

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch({ type: actionTypes.ReduceTimer });
        }, 100);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    },[]);

    return (
        <div className="container">
            <DataRecover businessesData={businesses} />
            <ListBussines businessesData={businesses} />
            <Gold />
        </div>
        );
}

export default App