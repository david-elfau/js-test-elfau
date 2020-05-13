import React, { useContext, useEffect } from 'react'

import { Context, actionTypes } from "./Store";
import data from './data/data.json'
import Alert from 'react-bootstrap/Alert'

import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

import Helpers from "./Helpers";

function DataRecover(props) {
    //const businesses = data.businesses;
    const { store, dispatch } = useContext(Context);

    var show = store.goldEarnIdle > 0;
    function hidePanel() {
        console.log("Cerrar panel");
        var x = document.getElementById("idle-gold-overlay");
        x.style.display = "none";
    };



    useEffect(() => {

        const cookies = new Cookies();
        var cookieInfo = cookies.get('data');
        if (cookieInfo) {

            //Initial gold
            dispatch({ type: actionTypes.GoldUpdate, value: cookieInfo.gold });

            //Iterate businesses
            props.businessesData.map((business, index) => {

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

    const FormatedGold = (goldData) => {
        const { gold } = goldData;
        return Helpers.FormatedGold(gold, 3);
    };


    const target = document.getElementById("gold-counter");

    return (
        <>
            <Overlay target={target} show={show} placement="bottom" onclick={hidePanel}>
                {({
                    placement,
                    scheduleUpdate,
                    arrowProps,
                    outOfBoundaries,
                    show: _show,
                    ...props
                }) => (
                        <div id="idle-gold-overlay"
                            {...props}
                            style={{
                                ...props.style,
                            }}
                        >
                            <h5>Welcome Back!</h5>
                            <p>
                                You earned  <img id="dollar-bar" src='./dollar.png' alt="$" /><FormatedGold gold={store.goldEarnIdle} />. <br />
                            </p>
                            <Button id="claim-idle" onClick={hidePanel} variant="success">
                                Claim!
                            </Button>
                        </div>
                    )}
            </Overlay>

        </>
    );
}

export default DataRecover