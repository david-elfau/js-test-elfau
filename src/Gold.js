import React, { useContext } from 'react'
import { Context } from "./Store";


function Gold(props) {
    const { store, dispatch } = useContext(Context);
    return (
        <div id="gold-counter" >
            <img id="dollar-counter" src='./dollar.png' alt="$" />
            <span id="amount-gold">{store.gold} </span>
        </div>
    );
}
export default Gold;