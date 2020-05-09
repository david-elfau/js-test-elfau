import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

class LevelBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const level = 6;
        const maxLevel = 15;
        const progress = 100 * level / maxLevel;
        const availableMoney = 10;
        const isPurchasable = availableMoney >= this.props.businessData.cost[level];

        let bar;
        if (isPurchasable) {
            bar = <ProgressBar animated variant="warning" now={progress} />;
        } else {
            bar = <ProgressBar variant="warning" now={progress} />;
        }


        return (
            <div id="levelBar" className="levelBar">
                {bar}
                {isPurchasable &&
                    <img id="arrowIcon" src="doubleArrow.png" srcSet="doubleArrow.png 1x, doubleArrow@2x.png 2x" />
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
}


export default LevelBar