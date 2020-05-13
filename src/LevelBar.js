import React, { useContext } from 'react'
import { Context } from "./Store";
import ProgressBar from 'react-bootstrap/ProgressBar'



function LevelBar(props) {

    const { store, dispatch } = useContext(Context);
    const { businessData } = props;
    let level = store.businesses[businessData.id].level;

    let milestones = [5,10,15,20,30,40,50,100,200]
    const maxLevel = 15;
    const progress = 100 * level / maxLevel;

    const isPurchasable = store.gold >= businessData.cost[level];

 
    let bar;
    if (isPurchasable) {
        bar = <ProgressBar animated variant="warning" now={progress} />;
    } else {
        bar = <ProgressBar variant="warning" now={progress} />;
    }


    return (
        <div id="levelBar" className="levelBar" hidden={level<1} >
            
            {bar}
            {isPurchasable &&
                <img id="arrowIcon" src="doubleArrow.png" alt="^" />
            }

            <svg className="background_o">
                <rect fill="transparent" stroke="rgba(112,112,112,1)" strokeWidth="1px" strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" id="background_o" rx="0" ry="0" x="0" y="0" width="154" height="26">
                </rect>
            </svg>
            <div id="LevelText">
                <span> Level {level} / {maxLevel} </span>
            </div>
        </div>
    );
   
}


export default LevelBar