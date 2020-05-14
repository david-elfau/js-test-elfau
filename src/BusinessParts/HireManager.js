import React, { useContext } from 'react'
import { Context, actionTypes } from '../Store';
import Button from 'react-bootstrap/Button';
import Helpers from '../Helpers';

function HireManagerPanel(props) {
    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    const FormatedGold = (goldData) => {
        const { gold } = goldData;
        return Helpers.FormatedGold(gold, 0);
    };


    const hireManagerAction = () => {
        if (store.gold >= businessData.managerCost) {
            dispatch({ type: actionTypes.HireManager, value: businessData.id });
            dispatch({ type: actionTypes.GoldUpdate, value: -businessData.managerCost });

            if (store.businesses[businessData.id].timestamp == -1) {
                dispatch({ type: actionTypes.StartProduction, value: businessData.id });
            }
            Helpers.SuccessNotification("Manager Hired!");
        } else {
            Helpers.NotEnoughMoneyNotification();
        }
    }

    let variantButton = store.gold >= businessData.managerCost ? "success" : "secondary";

    let hireManagerPanel;
    if (store.businesses[businessData.id].level < 1) {
        hireManagerPanel = <div id="manager" />;
    } else {
        if (store.businesses[businessData.id].managerHired) {
            hireManagerPanel = <div id="manager">
                <img className="manager-icon hired" src={'./businessIcons/' + businessData.managerAsset + '.png'} />

            </div>;
        } else {
            hireManagerPanel = <div onClick={hireManagerAction} id="manager">
                <img className="manager-icon to-hire" src="./businessIcons/addManager.png" />
                <Button id="hire-manager-button" variant={variantButton} size="lg">
                    {<FormatedGold gold={businessData.managerCost} />}
                </Button>
            </div>;
        }
    }
    return hireManagerPanel;
}

const HireManager = (props) => {
    const { store, dispatch } = useContext(Context);
    const { businessData } = props;
    return (
        <HireManagerPanel businessData={businessData} />       
    );
}


export default HireManager