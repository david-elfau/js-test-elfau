import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function TimeoutAlert({ id, message, deleteAlert }) {
    const onClick = () => deleteAlert(id);
    useEffect(() => {
        const timer = setTimeout(onClick, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <p>
            <button onClick={onClick}>
                {message} {id}
            </button>
        </p>
    );
}
let _ID = 0;
function App() {
    const [alerts, setAlerts] = useState([]);
    const addAlert = message => setAlerts([...alerts, { id: _ID++, message }]);
    const deleteAlert = id =>
        setAlerts(alerts => alerts.filter(m => m.id !== id));
    console.log({ alerts });
    return (
        <div className="App">
            <button onClick={() => addAlert("test ")}>Add Alertz</button>
            <br />
            {alerts.map(m => (
                <TimeoutAlert key={m.id} {...m} deleteAlert={deleteAlert} />
            ))}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);