import React, { useContext } from 'react'

import { Context, actionTypes } from "./Store";

const HireManager = (props) => {
    const { characterData, removeCharacter } = props;


    const hireManagerAction = () => {
        
    }
    return (
        <div onClick={hireManagerAction} id="manager">
            <img id="managerIcon" src="managerIcon.png" srcSet="managerIcon.png 1x, managerIcon@2x.png 2x" />
        </div>
    );
}


export default HireManager