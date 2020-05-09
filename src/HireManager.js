import React, { Component } from 'react'

const HireManager = (props) => {
    const { characterData, removeCharacter } = props;
    return (
        <div onClick="" id="manager">
            <img id="managerIcon" src="managerIcon.png" srcSet="managerIcon.png 1x, managerIcon@2x.png 2x" />
        </div>
    );
}


export default HireManager