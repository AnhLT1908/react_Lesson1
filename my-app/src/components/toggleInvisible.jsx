import { useState } from "react";

const Invisibles = () => {

    const [invisible, setInvisible] = useState(false);

    const toggleInvisibles =  ()  => {
        setInvisible(!invisible);
    }

    return (
        <div>
            <button onClick={toggleInvisibles}>invisible</button><br></br>
            {invisible && <h1>Click to Invisibles</h1>}
        </div>
    );

}

export default Invisibles;