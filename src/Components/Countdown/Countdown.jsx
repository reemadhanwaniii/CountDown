import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {

    const [target,setTarget] = useState(null);
    const [diff,setDiff] = useState(0);

    function handleSubmit(){
        setDiff(new Date(target) - new Date());
    }

    return(
        <>
            <h1>Countdown Timer App</h1>
            <div id="input">
                <input 
                        type="datetime-local" 
                        id="date-time"
                        onChange={(e)=> setTarget(e.target.value)}
                />
                <button id="submit" onClick={handleSubmit}>Start</button>
            </div>
            <div id="display">
                <ul>
                    <li><span id="days"></span>Days</li>
                    <li><span id="hours"></span>Hours</li>
                    <li><span id="minutes"></span>Minutes</li>
                    <li><span id="seconds"></span>Seconds</li>
                </ul>
            </div>
        </>
    )
}

export default Countdown;