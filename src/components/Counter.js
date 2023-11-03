import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>Counter Buttons</div>
            <button onClick={() => setCount(count + 1)}>Increment Button </button>
            <button onClick={() => setCount(count - 1)}>Decrement Button </button>
            <div> The value of count is: {count} </div>
        </>
    )
}

export default Counter