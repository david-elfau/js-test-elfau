import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

import { Context } from "./Store";  

const ProducerPanel = (props) => {

    const { store, dispatch } = useContext(Context);
    const { businessData } = props;

    let level = store.businesses[businessData.id].level;
    const time = 4;
    const progress = 100 * time / businessData.timer[level];

    return (
        <div onClick="application.goToTargetView(event)" id="producePanel">
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
                    <span>{businessData.timer[level]}</span>
                </div>
            </div>
        </div>
    );
}

export default ProducerPanel
