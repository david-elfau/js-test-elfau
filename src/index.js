import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/adobeXD.css'
import './style/CustomStyle.css';
import { Context, initialState, reducer, actionTypes } from "./Store";


function Hook() {
    const [store, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        dispatch({ type: actionTypes.LoadData });
    },[]);

    return (
        <Context.Provider value={{ store, dispatch }}>
                <App />
        </Context.Provider>
  );
}

ReactDOM.render(<Hook />, document.getElementById('root'))