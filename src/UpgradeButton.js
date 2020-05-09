import React, { Component } from 'react'

import Button from 'react-bootstrap/Button'

class UpgradeButton extends React.Component {
    constructor(props) {
        super(props);
    }




render(){
    let availableMoney = 110;
    let level = 0;
    let isPurchasable = availableMoney >= this.props.businessData.cost[level];

    let button;
    if (isPurchasable) {
        button = <Button id="upgradeButton" variant="success" size="lg">
            Upgrade<br/>
            ${this.props.businessData.cost[level]}
          </Button>;
    } else {
        button = <Button id="upgradeButton" variant="secondary" size="lg">
            Upgrade<br/>
            ${this.props.businessData.cost[level]}
          </Button>;
    }
        return (            
            <div onClick="application.goToTargetView(event)" id="buyButton" className="buyButton">
                {button}
               
            </div>
        );
    }
}


export default UpgradeButton