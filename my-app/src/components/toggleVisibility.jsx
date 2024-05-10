import React, { useState } from 'react';

const Visible = () => {

    const [isVisible, setIsVisible] = useState(false);

    const show = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={show}>Show/Hide Text</button>
            {isVisible && <p>Toggle Me!</p>}
        </div>
    )

}

export default Visible