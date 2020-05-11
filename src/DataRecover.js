import React, { useContext, useEffect } from 'react'

import { Context, actionTypes } from "./Store";
import data from './data/data.json'
import Alert from 'react-bootstrap/Alert'

import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';

function DataRecover(props) {
    const businesses = data.businesses;
    const { store, dispatch } = useContext(Context);

    var show = true;
    function hidePanel() {
        var x = document.getElementById("AlertWelcomeBack");
        x.style.display = "none";
    };



    useEffect(() => {

        const cookies = new Cookies();
        var cookieInfo = cookies.get('data');
        if (cookieInfo) {

            //Initial gold
            dispatch({ type: actionTypes.GoldUpdate, value: cookieInfo.gold });

            const businesses = props.businessesData.map((business, index) => {

                //Data loaded from cookie
                var currentDate = Date.now();

                let level = cookieInfo.businesses[index].level;
                let managerHired = cookieInfo.businesses[index].managerHired;

                dispatch({ type: actionTypes.SetBusinessState, value: business.id, level: level, managerHired: managerHired });


                const productionTime = business.timer[level];
                let remainingTime = productionTime - (Date.now() - cookieInfo.businesses[index].timestamp) * 0.001;

                var goldEarned = 0;
                if (cookieInfo.businesses[index].timestamp != -1) {

                    if (remainingTime <= 0 ) {
                        if (managerHired) {
                            var numFullProductions = parseInt(-remainingTime / productionTime);
                            goldEarned = business.production[level] * numFullProductions;

                            var newTimestamp = cookieInfo.businesses[index].timestamp + (1 + numFullProductions) * productionTime * 1000;

                            dispatch({ type: actionTypes.StartProduction, value: business.id, aux: newTimestamp });

                            let newRemainingTime = productionTime - (Date.now() - newTimestamp) * 0.001;
                            console.log("[" + business.name + "] Claim and continue x" + numFullProductions + " remainingTime:" + newRemainingTime);

                        } else {
                            //Get and finish
                            console.log("[" + business.name + "] Claim and finish");
                            goldEarned = business.production[level];
                            dispatch({ type: actionTypes.EndProduction, value: business.id });
                        }
                        dispatch({ type: actionTypes.GoldUpdate, value: goldEarned });
                        dispatch({ type: actionTypes.AddGoldEarnIdle, value: goldEarned });
                    } else {
                        dispatch({ type: actionTypes.StartProduction, value: business.id, aux: cookieInfo.businesses[index].timestamp  });
                    }
                }
            })  

        } else {
            console.log("Sin cookies");
        }
        

    }, []);


    return (
        <>
            <Alert id="AlertWelcomeBack" show={show} variant="success">
                <Alert.Heading>Welcome Back!</Alert.Heading>
                <p>
                    You were offline for {store.timeIdle} time.<br />
                    You earned ${store.goldEarnIdle}. <br />
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={hidePanel} variant="outline-success">
                        Claim!
          </Button>
                </div>
            </Alert>

        </>
    );
}

export default DataRecover