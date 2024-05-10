import React, { useState } from "react";

const Counting = () => {

    const [counter, setCounter] = useState(0); 

    const countNumbers = () => {
        return setCounter(counter+1);
    };


    return (
        <div>
            <button onClick={countNumbers}>Count</button>
            <h1>{counter}</h1>
        </div>
    )
}
 export default Counting;