import React from 'react'

import LevelBar from './LevelBar'
import UpgradeButton from './UpgradeButton'
import HireManager from './HireManager'
import ProducerPanel from './ProducerPanel'


const Business = (props) => {
    const businesses = props.businessesData.map((business, index) => {
        return (
            <div key={index} id="Bussines">
                <div id="title">
                   {business.name}
                </div>
                <LevelBar businessData={business}/>
                <UpgradeButton businessData={business} />
                <HireManager businessData={business} />
                <ProducerPanel businessData={business} />
            </div>
        )
    })

    return businesses;

}

const ListBusiness = (props) => {
    const { businessesData } = props;
    return (
         <Business businessesData={businessesData} />
    );
}


export default ListBusiness