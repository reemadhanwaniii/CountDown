import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

function Countdown() {

    const [target,setTarget] = useState(null);
    const [diff,setDiff] = useState(0);
    const id = useRef(null);

    function handleSubmit(){
        id.current = setInterval(()=>{
            setDiff(new Date(target) - new Date());
        },1000)
    }

    useEffect(()=>{
        if(diff < 0){
            clearInterval(id.current);
        }
    },[diff]);

    const getDays = () => {
        return Math.floor(diff/(1000*60*60*24));
    }

    const getHours = () =>{
        const hoursInMs = diff%(1000*60*60*24);
        return Math.floor(hoursInMs/(1000*60*60));
    }

    const getMinutes = () => {
        const minInMs =diff%(1000*60*60);
        return Math.floor(minInMs/(1000*60*60));
    }

    const getSeconds = () => {
        const secInMs = diff%(1000*60);
        return Math.floor(secInMs/1000);
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
                    <li><span id="days">{getDays()}</span>Days</li>
                    <li><span id="hours">{getHours()}</span>Hours</li>
                    <li><span id="minutes">{getMinutes()}</span>Minutes</li>
                    <li><span id="seconds">{getSeconds()}</span>Seconds</li>
                </ul>
            </div>
        </>
    )
}

export default Countdown;