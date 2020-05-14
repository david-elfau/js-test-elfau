import React, { useContext } from 'react'
import { Context, actionTypes } from './helpers/Store';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

import Helpers from './helpers/Helpers';

function GoldInIdle(props) {
    const { store, dispatch } = useContext(Context);

    let show = store.goldEarnIdle > 0;

    function hidePanel() {
        let x = document.getElementById("idle-gold-overlay");
        x.style.display = "none";
    };


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
                        <div id="idle-gold-overlay" {...props}  >
                            <h5>Welcome Back!</h5>
                            <p>
                                You earned  <img id="dollar-bar" src='./dollar.png' alt="$" />
                                <FormatedGold gold={store.goldEarnIdle} />. <br />
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

export default GoldInIdle