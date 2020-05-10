import React, { Component, useContext } from 'react'
import { Context, actionTypes } from "./Store";

import Button from 'react-bootstrap/Button'

function ButtonOptions(props) {

    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    let level = store.businesses[businessData.id].level;

    let isPurchasable = store.gold >= businessData.cost[level];

    const updateBussines = () => {
        dispatch({ type: actionTypes.GoldUpdate, value: -businessData.cost[level] });
        dispatch({ type: actionTypes.LevelUpgrade, value: businessData.id });
    }
    var UpgradeOrBuy = "Upgrade";
    if (level < 1) {
        UpgradeOrBuy = "Buy";
    }


    var button;
    if (isPurchasable) {
        button = <Button id="upgradeButton" variant="success" size="lg"
            onClick={updateBussines}>
            {UpgradeOrBuy}<br />
            ${businessData.cost[level]}
        </Button>;
    } else {
        button = <Button id="upgradeButton" variant="secondary" size="lg"
            onClick={() => dispatch({ value: -10 })}>
            {UpgradeOrBuy}<br />
            ${businessData.cost[level]}
        </Button>;
    }

    return button;
}

const UpgradeButton = (props) => {
    const { businessData } = props;

    return (
        <div id="buyButton" className="buyButton">
            <ButtonOptions businessData={ businessData}/>
           
        </div>
    );

}


export default UpgradeButton