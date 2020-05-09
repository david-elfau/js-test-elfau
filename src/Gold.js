import React, { useContext } from 'react'
import { Context } from "./Store";


function Gold(props) {
    const { store, dispatch } = useContext(Context);
    return (
        <div id="gold counter" >
            <span> $ {store.gold} </span>
        </div>
    );
}
export default Gold;