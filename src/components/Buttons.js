import React from 'react'

function Buttons({ handleReset, activation }) {
    const [active, setActive] = activation;
    return (
        <div>
            <span className="align align-bottom flex justify-center">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-4 rounded-l" id='start_stop' onClick={() => setActive(!active)}>{active ? 'Pause' : 'Start'}</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-4 rounded-l" id='reset' onClick={handleReset}>Reset</button>
            </span>
        </div>
    )
}

export default Buttons
