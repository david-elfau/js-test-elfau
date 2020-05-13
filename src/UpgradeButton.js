import React, { useContext } from 'react'
import { Context, actionTypes } from "./Store";
import Button from 'react-bootstrap/Button'
import Helpers from "./Helpers";

function ButtonOptions(props) {


    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    const FormatedGold = (goldData) => {
        const { gold } = goldData;
        return Helpers.FormatedGold(gold, 3);
    };

    const updateBusines = () => {
        dispatch({ type: actionTypes.GoldUpdate, value: -businessData.cost[level] });
        dispatch({ type: actionTypes.LevelUpgrade, value: businessData.id });
    }

    let level = store.businesses[businessData.id].level;
    let isPurchasable = store.gold >= businessData.cost[level];

  
    var UpgradeOrBuy = "Upgrade";
    if (level < 1) {
        UpgradeOrBuy = "Buy";
    }


    var button;
    if (level >= businessData.cost.length) {
        button = <Button id="upgradeButton" variant="secondary" size="lg">
            MAX LEVEL!   
        </Button>;
    } else {
        if (isPurchasable) {
            button = <Button id="upgradeButton" variant="success" size="lg"
                onClick={updateBusines}>
                {UpgradeOrBuy}<br />
                <img id="dollar-bar" src='./dollar.png' alt="$" /><FormatedGold gold={businessData.cost[level]} />
            </Button>;
        } else {
            button = <Button id="upgradeButton" variant="secondary" size="lg">
                {UpgradeOrBuy}<br />
                <img id="dollar-bar" src='./dollar.png' alt="$" /><FormatedGold gold={businessData.cost[level]} />
            </Button>;
        }
    }



    return button;
}

const UpgradeButton = (props) => {
    const { businessData } = props;
    const { store, dispatch } = useContext(Context);

    const getClassName = () => {
        if (store.businesses[businessData.id].level == 0)
            return "buyButton to-purchase"
        return "buyButton purchased"
    }

    return (
        <div id="buyButton" className={getClassName()}>
            <ButtonOptions businessData={ businessData}/>
           
        </div>
    );

}


export default UpgradeButton