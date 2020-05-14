import React, { useContext } from 'react'
import { Context } from '../helpers/Store';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Helpers from '../helpers/Helpers';


function LevelBar(props) {

    const { store, dispatch } = useContext(Context);
    const { businessData } = props;
    let level = store.businesses[businessData.id].level;


    const maxLevel = Helpers.NextLevelMilestone(level);
    const preLevel = Helpers.PreLevelMilestone(level);
    const progress = 100 * (level - preLevel) / (maxLevel - preLevel);

    const isPurchasable = store.gold >= businessData.cost[level];

 
    let bar;
    if (isPurchasable) {
        bar = <ProgressBar animated variant="warning" now={progress} />;
    } else {
        bar = <ProgressBar variant="warning" now={progress} />;
    }


    return (
        <div id="level-bar" hidden={level<1} >            
            {bar}
            {isPurchasable &&
                <img id="arrow-icon" src="arrow_green.png" alt="^" />
            }

            <div id="level-text">
                <span> Level {level} / {maxLevel} </span>
            </div>
        </div>
    );
   
}

export default LevelBar