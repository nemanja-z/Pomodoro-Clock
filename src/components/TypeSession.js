import React from 'react'

function TypeSession({ type, value }) {
    const [count, setCount] = value;

    const handleIncrement = () => {
        if (count >= 60) { return 0 }
        else { setCount(s => s + 1); }
    }

    const handleDecrement = () => {
        if (count === 1) { return 0 }
        else { setCount(s => s - 1); }
    }

    return (
        <div>
            <p className='font-bold text-blue-900 text-2xl' id={`${type.toLowerCase()}-label`}>{type} Length</p>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-4 rounded-l" id={`${type.toLowerCase()}-increment`} onClick={handleIncrement}>+</button>
            <p className='font-bold text-blue-900 text-2xl' id={`${type.toLowerCase()}-length`}>{count}</p>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-6 px-4 rounded-l" id={`${type.toLowerCase()}-decrement`} onClick={handleDecrement}>-</button>

        </div>
    )
}

export default TypeSession
