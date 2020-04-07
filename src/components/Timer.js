import React, { useState, useEffect, useRef } from 'react';
import '../assets/main.css';
import TypeSession from './TypeSession'
import Info from './Info'
import Buttons from './Buttons'
import { useInterval } from './useInterval';
import sound from '../sound/sound.mp3';


function Timer() {
    const [session, setSession] = useState(25)
    const [brea, setBrea] = useState(5)
    const [active, setActive] = useState(false)
    const [mode, setMode] = useState('Session')
    const [time, setTime] = useState(session * 1000 * 60)
    const beep = useRef()

    useEffect(() => {
        setTime(session * 60 * 1000)
    }, [session])
    useInterval(() => setTime(time - 1000), active ? 1000 : null)


    useEffect(() => {
        if (time === 0 && mode === 'Session') {
            beep.current.play()
            setMode('Break')
            setTime(brea * 60 * 1000)
        } else if (time === 0 && mode === 'Break') {
            beep.current.play()
            setMode('Session')
            setTime(session * 60 * 1000)
        }
    }, [mode, time, session, brea])


    const reset = () => {
        beep.current.pause()
        beep.current.currentTime = 0
        setSession(25)
        setBrea(5);
        setActive(false);
        setMode('Session')
        setTime(25 * 60 * 1000);
    }
    return (
        <div>
            <div className='flex justify-around'>
                <TypeSession value={[session, setSession]} type={'Session'} />
                <TypeSession value={[brea, setBrea]} type={'Break'} />
            </div>
            <Info
                currmode={[mode, setMode]}
                currtime={[time, setTime]}
                time={time}
            />

            <Buttons
                activation={[active, setActive]}
                handleReset={reset}
            />
            <audio id="beep" src={sound} ref={beep} />
        </div>


    );
}

export default Timer
