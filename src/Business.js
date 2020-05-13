import React, { useContext }  from 'react'

import LevelBar from './LevelBar'
import UpgradeButton from './UpgradeButton'
import HireManager from './HireManager'
import ProducerPanel from './ProducerPanel'

import { Context } from "./Store";


const Business = (props) => {

    const { store, dispatch } = useContext(Context);
    const getClassName = (index) => {
        if (store.businesses[index].level == 0)
            return "to-purchase"
        return ""
    }
    const businesses = props.businessesData.map((business, index) => {
        return (
            <div key={index} id="Business" className={getClassName(index)}>
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