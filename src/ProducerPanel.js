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

        var isIdle = store.businesses[businessData.id].timestamp == -1;

        if (isIdle && isPurchased) {
            dispatch({ type: actionTypes.StartProduction, value: businessData.id });
        }
    };

    const FormatedTime = (timeData) => {
        const { time } = timeData;   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + "h " ;
        }
        if (mins > 0) {
            ret += "" + mins + "m ";
        }
        ret += "" + secs+ "s" ;
        return ret;
    };
       


    return (
        <div onClick={startProduction} id="producePanel">
            <img id="Icon" src={'./bussinessIcons/' + businessData.icon + '.png'} />

            {level>0 &&             
            <div id="progressContainer">
                <ProgressBar variant="success" animated now={progress} />
                <div id="earning">
                    <img id="dollar-bar" src='./dollar.png' alt="$" />
                    <span>{businessData.production[level]}</span>
                </div>
                <div id="timer">                    
                    <span>
                        <FormatedTime time={remainingTime} />
                    </span>
                </div>
            </div>
            }
        </div>
    );
}

export default ProducerPanel
