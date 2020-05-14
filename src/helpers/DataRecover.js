import React, { useContext, useEffect } from 'react'
import { Context, actionTypes } from './Store';

import Cookies from 'universal-cookie';

function DataRecover(props) {
    const { store, dispatch } = useContext(Context);

    useEffect(() => {

        const cookies = new Cookies();
        let cookieInfo = cookies.get('data');
        if (cookieInfo) {

            //Recover initial gold
            dispatch({ type: actionTypes.GoldUpdate, value: cookieInfo.gold });

            //Iterate businesses
            props.businessesData.map((business, index) => {
                let currentDate = Date.now();

                let level = cookieInfo.businesses[index].level;
                let managerHired = cookieInfo.businesses[index].managerHired;

                //Recover business state
                dispatch({ type: actionTypes.SetBusinessState, value: business.id, level: level, managerHired: managerHired });


                const productionTime = business.timer[level];
                let remainingTime = productionTime - (Date.now() - cookieInfo.businesses[index].timestamp) * 0.001;

                let goldEarned = 0;

                //Check pending production, claim and restart
                if (cookieInfo.businesses[index].timestamp != -1) {
                    if (remainingTime <= 0) {
                        if (managerHired) {
                            let numFullProductions = parseInt(-remainingTime / productionTime);
                            goldEarned = business.production[level] * numFullProductions;

                            let newTimestamp = cookieInfo.businesses[index].timestamp + (1 + numFullProductions) * productionTime * 1000;
                            dispatch({ type: actionTypes.StartProduction, value: business.id, aux: newTimestamp });

                            console.log("[" + business.name + "] Claim and continue x" + numFullProductions);

                        } else {
                            //Get and finish
                            console.log("[" + business.name + "] Claim and finish");
                            goldEarned = business.production[level];
                            dispatch({ type: actionTypes.EndProduction, value: business.id });
                        }

                        dispatch({ type: actionTypes.GoldUpdate, value: goldEarned });
                        dispatch({ type: actionTypes.AddGoldEarnIdle, value: goldEarned });

                    } else {
                        dispatch({ type: actionTypes.StartProduction, value: business.id, aux: cookieInfo.businesses[index].timestamp });
                    }
                }
            })

        } else {
            console.log("Sin cookies");
        }
    }, []);

    return (
        <>
        </>
    );
}

export default DataRecover