import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)


    return (
        <>
            <div>Counter</div>
            <button onClick={() => { setCount(count + 1) }}>Increment Button</button>
            <button onClick={() => { setCount(count - 1) }}>Decrement Button</button>
            <div>{count}</div>
        </>
    )
}

export default Counter