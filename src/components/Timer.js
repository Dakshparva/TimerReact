import { useEffect, useState } from 'react';
import './component.css';

function Timer(){

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timerId;

    useEffect(() => {
        if(!timerId){
            timerId = setInterval(() => {
                setSeconds(seconds + 1);
                if(seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000);
        }

        return () => {
            clearInterval(timerId);
        }
    }, [seconds, minutes]);

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    };

    const stopTimer = () => {
        clearInterval(timerId);
    };

    const resumeTimer = () => {
        timerId = setInterval(() => {
            setSeconds(seconds + 1);
            if(seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);
    }

return(
        <div className="timer">
            <h1>Timer</h1>

            <div className='timer-card'>
                <h1>{minutes < 10 ?  '0' + minutes : minutes}:{seconds <10? '0' + seconds : seconds}</h1>

                <div className="btn-grp">
                    <button className='btn' onClick={stopTimer}>Stop</button>
                    <button className='btn' onClick={resumeTimer}>Resume</button>
                    <button className='btn' onClick={restart}>Restart</button>
                </div>
                
            </div>
        </div>
    );
};

export default Timer;