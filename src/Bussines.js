import React from 'react'

import LevelBar from './LevelBar'
import UpgradeButton from './UpgradeButton'
import HireManager from './HireManager'
import ProducerPanel from './ProducerPanel'


const Business = (props) => {
    const businesses = props.businessesData.map((business, index) => {
        return (

            <tr key={index}>
                <div id="Bussines">
                    <div id="title">
                        <span>{business.name}</span>
                    </div>

                    <LevelBar businessData={business}/>
                    <UpgradeButton businessData={business} />
                    <HireManager businessData={business} />
                    <ProducerPanel businessData={business} />

                </div>
            </tr>
        )
    })

    return <tbody>{businesses}</tbody>

}

const ListBusiness = (props) => {
    const { businessesData } = props;
    return (
        <table>
            <Business businessesData={businessesData} />
        </table>
    );
}


export default ListBusiness