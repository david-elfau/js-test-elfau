import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './adobeXD.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomStyle.css';
import { Context, initialState, reducer, actionTypes } from "./Store";


function Hook() {
    const [store, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        /*if (store.businesses[0].remaingTime <= 0) {
            console.log("Sin tiempo");
            return;
        }*/
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            dispatch({ type: actionTypes.ReduceTimer });
        }, 100);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    });

    return (
        <Context.Provider value={{ store, dispatch }}>
            <App />

        </Context.Provider>
  );
}

ReactDOM.render(<Hook />, document.getElementById('root'))