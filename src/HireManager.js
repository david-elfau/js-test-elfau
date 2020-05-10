import React, { useContext } from 'react'
import { Context, actionTypes } from "./Store";
import Alert from 'react-bootstrap/Alert'


function HireManagerPanel(props) {
    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    const hireManagerAction = () => {

        if (store.gold >= businessData.managerCost) {
            dispatch({ type: actionTypes.HireManager, value: businessData.id });
            dispatch({ type: actionTypes.GoldUpdate, value: -businessData.managerCost });
        } else {
            console.log("NOT ENOUGH MONEY");
        }
    }

    let hireManagerPanel;
    if (store.businesses[businessData.id].managerHired) {
        hireManagerPanel = <div id="manager">
            <img id="managerIcon" src={'./bussinessIcons/' + businessData.managerAsset + '.png'} srcSet={'./bussinessIcons/' + businessData.managerAsset + '.png 1x, ./bussinessIcons/' + businessData.managerAsset + '@2x.png 2x'} />
        </div>;
    } else {
        hireManagerPanel = <div onClick={hireManagerAction} id="manager">
            <img id="managerIcon" src="./bussinessIcons/addManager.png" srcSet='./bussinessIcons/addManager.png 1x, ./bussinessIcons/addManager@2x.png 2x' />
        </div>;
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