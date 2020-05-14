import React, { useContext } from 'react'
import { Context } from '../helpers/Store';

import LevelBar from './LevelBar'
import UpgradeButton from './UpgradeButton'
import HireManager from './HireManager'
import ProducerPanel from './ProducerPanel' 


const Business = (props) => {

    const { store, dispatch } = useContext(Context);
    const { businessesData } = props;

    const getClassName = (index) => {
        if (store.businesses[index].level == 0)
            return "to-purchase"
        return ""
    }
    const businesses = props.businessesData.map((business, index) => {
        return (
            <div key={index} id="business" className={getClassName(index)}>
                <div id="title">
                    {business.name}
                </div>
                <LevelBar businessData={business} />
                <UpgradeButton businessData={business} />
                <HireManager businessData={business} />
                <ProducerPanel businessData={business} />
            </div>
        )
    })

    return (
        <div className="business-container">
            {businesses}
        </div>)
}

export default Business