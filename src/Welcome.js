import React, { useContext, useEffect } from 'react'

import { Context, actionTypes } from "./Store";
import data from './data/data.json'
import Alert from 'react-bootstrap/Alert'

import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';

function Welcome(props) {
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
            const businesses = props.businessesData.map((business, index) => {

                //Data loaded from cookie
                var currentDate = Date.now();

                let level = cookieInfo.businesses[index].level;
                const productionTime = business.timer[level];
                let remainingTime = productionTime - (Date.now() - cookieInfo.businesses[index].timestamp) * 0.001;

                console.log("[" + business.name + "] Remaining time:" + remainingTime + "Timestamp:" + cookieInfo.businesses[index].timestamp);
                var goldEarned = 0;

                if (remainingTime <= 0 && cookieInfo.businesses[index].timestamp != -1) {

                    if (cookieInfo.businesses[index].managerHired) {
                        console.log("[" + business.name + "] Claim and continue");
                        //Get and continue
                        //TODO
                    } else {
                        //Get and finish
                        console.log("[" + business.name + "] Claim and finish");
                        goldEarned = business.production[level];
                        dispatch({ type: actionTypes.EndProduction, value: business.id });
                    }

                    dispatch({ type: actionTypes.GoldUpdate, value: goldEarned });
                    dispatch({ type: actionTypes.AddGoldEarnIdle, value: goldEarned });
                }
                console.log("[" + business.name + "] Gold:" + goldEarned);
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
                    You earned ${store.timeIdle}. <br />
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

export default Welcome