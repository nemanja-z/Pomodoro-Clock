import React from 'react'
import format from 'date-fns/format';

function Info({ currmode, currtime }) {
    const [mode] = currmode;
    const [time] = currtime;


    return (
        <div className='text-center font-extrabold text-6xl text-green-600'>

            <h4 id='timer-label'>{mode === 'Session' ? 'Session' : 'Break'}</h4>
            <h4 id='time-left'>{format(time, 'mm:ss')}</h4>


        </div>
    )
}
//format(time, 'mm:ss')

export default Info



