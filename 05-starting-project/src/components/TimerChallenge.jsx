import {useState, useRef} from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}){

    const [timeRemaining, setTimeRemaining] = useState(targetTime *1000);

    const timer = useRef();
    const dialog = useRef();
    const expired = useRef(false);

    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    console.log(expired.current);
    if(timeRemaining <=0){
        expired.current = true;
        handleStop();
    }

function handleStart(){
    timer.current = setInterval(() => {
        setTimeRemaining((oldTime ) => oldTime - 10);
    } ,10)
}

function handleStop(){
        clearInterval(timer.current);
        setTimeRemaining(targetTime*1000);

}
    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className='challenge'>
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={isTimerActive ? handleStop : handleStart}>
                        {isTimerActive ? 'Stop' : 'Start'}
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : undefined}>
                    {isTimerActive ? 'Timer is running...': 'Timer active'}
                </p>
            </section>
        </>
    );
}