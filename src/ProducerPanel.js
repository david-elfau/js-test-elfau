import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Context, actionTypes } from "./Store";

function ProducerPanel(props){
    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    let level = store.businesses[businessData.id].level;
    const productionTime = businessData.timer[level];

    let remainingTime = productionTime - (Date.now() - store.businesses[businessData.id].timestamp)*0.001;
    let progress = 100 * (businessData.timer[level] - remainingTime) / productionTime;

    if (remainingTime <= 0) {
        if (store.businesses[businessData.id].timestamp != -1) {
            productionEnded();
        }
        progress = 0;
        remainingTime = productionTime;
    } 

    function productionEnded(){
        dispatch({ type: actionTypes.EndProduction, value: businessData.id });
        dispatch({ type: actionTypes.GoldUpdate, value: businessData.production[store.businesses[businessData.id].level] });

        if (store.businesses[businessData.id].managerHired) {
            dispatch({ type: actionTypes.StartProduction, value: businessData.id });
        }
    }

    const startProduction = () => {
        var isPurchased = store.businesses[businessData.id].level > 0;

        var isIdle = store.businesses[businessData.id].timestamp = -1;

        if (isIdle && isPurchased) {
            dispatch({ type: actionTypes.StartProduction, value: businessData.id });
        }
    }
    const endProduction = () => {
        dispatch({ type: actionTypes.EndProduction, value: businessData.id });
        dispatch({ type: actionTypes.GoldUpdate, value: businessData.production[store.businesses[businessData.id].level] });
    }


       


    return (
        <div onClick={startProduction} id="producePanel">
            <img id="Icon" src={'./bussinessIcons/' + businessData.icon + '.png'} srcSet={'./bussinessIcons/' + businessData.icon + '.png 1x, ./bussinessIcons/' + businessData.icon + '@2x.png 2x'} />
            <div id="progressContainer">
                <ProgressBar variant="success" animated now={progress} />
               
                <svg className="background_">
                    <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" id="background_" rx="0" ry="0" x="0" y="0" width="113" height="25.52">
                    </rect>
                </svg>
                <div id="earning">
                    <span>${businessData.production[level]}</span>
                </div>
                <div id="timer">
                    <span>{remainingTime}</span>
                </div>
            </div>
        </div>
    );
}

export default ProducerPanel
