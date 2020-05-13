import React, { useContext } from 'react'
import { Context } from "./Store";
import Helpers from "./Helpers";


function Gold(props) {
    const FormatedGold = (goldData) => {
        const { gold } = goldData;
        return Helpers.FormatedGold(gold, 3);
    };


    const { store, dispatch } = useContext(Context);
    return (
        <div id="gold-counter" >
            <img id="dollar-counter" src='./dollar.png' alt="$" />
            <span id="amount-gold"><FormatedGold gold={store.gold} /></span>
        </div>
    );
}
export default Gold;