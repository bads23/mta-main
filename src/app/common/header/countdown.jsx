import React, {useEffect, useState} from 'react'

var toStr = (int) => {
    var n = int.toString()
    n = n.padStart(2,'0')
    return n
}

const Clock = ({timer}) => {
    return (
        <> 
            {
                timer.delta < 0 ? (
                    <>
                        <h2>Its Launch Day! Welcome! </h2>
                    </>
                ) : (
                    <>
                        <h2>Countdown to Launch: </h2>
                        <div id="clock">
                            <div className="timers" id="dayTimer"> {timer.days } {timer.days === 1 ? 'Day' : 'Days'} </div>
                            <div className="timers" id="hourTimer"> {timer.hours } {timer.hours === 1 ? 'Hour' : 'Hours'}</div>
                            <div className="timers" id="minTimer"> {timer.minutes} {timer.minutes === 1 ? 'Minute' : 'Minutes'}</div>
                            <div className="timers" id="secTimer"> {timer.seconds} {timer.seconds === 1 ? 'Second' : 'Seconds'}</div>
                        </div>
                    </>
                )
            }
            
        </>
    )
}

const counter = () => {
    
    var d = new Date();
    var f = new Date(2020, 1, 29, 10, 0, 0); //year,month(arrayindex),date,hours,minutes,seconds

    var diff = f.getTime() - d.getTime() 

    var timer = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24 )),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: (Math.floor(diff / 1000) % 60),
        delta: diff
    };
    
    return timer;
}


const CountdownBar = () =>{
    const [clock, setClock] = useState({})

    useEffect(() =>{
        setInterval(() => {
            setClock(counter())
        }, 1000);
    },[])
    
    return(
        <>
            <div className="countdownBar">
                <div className="counterWrap">
                    <Clock timer={clock} />
                </div>
            </div>
        </>
    )
}

export default CountdownBar