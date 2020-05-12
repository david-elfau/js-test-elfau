import React, { useContext } from 'react'
import { Context, actionTypes } from "./Store";
import Button from 'react-bootstrap/Button';

function HireManagerPanel(props) {
    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    const hireManagerAction = () => {
        if (store.gold >= businessData.managerCost) {
            dispatch({ type: actionTypes.HireManager, value: businessData.id });
            dispatch({ type: actionTypes.GoldUpdate, value: -businessData.managerCost });

            if (store.businesses[businessData.id].timestamp == -1) {
                dispatch({ type: actionTypes.StartProduction, value: businessData.id });
            }
        } else {
            console.log("NOT ENOUGH MONEY");
        }
    }

    let hireManagerPanel;
    if (store.businesses[businessData.id].level < 1) {
        hireManagerPanel = <div id="manager" />;
    } else {
        if (store.businesses[businessData.id].managerHired) {
            hireManagerPanel = <div id="manager">
                <img class="manager-icon hired" src={'./bussinessIcons/' + businessData.managerAsset + '.png'} />

            </div>;
        } else {
            hireManagerPanel = <div onClick={hireManagerAction} id="manager">
                <img class="manager-icon to-hire" src="./bussinessIcons/addManager.png" />
                <Button id="hire-manager-button" variant="success" size="lg">
                    {businessData.managerCost}
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