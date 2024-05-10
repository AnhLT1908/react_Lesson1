import React, { useState } from "react"; 

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handleIncrease} className="bg-primary">Increase</button>
            <button onClick={handleDecrease} className="bg-secondary">Decrease</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter;