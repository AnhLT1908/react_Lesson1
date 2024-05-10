import React, { useState } from 'react';

const InputField = () => {

    const [value, setValue] = useState('');

    const inputText = (e) => {
        setValue(e.target.value);
    }


    return (
        <div>
            <input type="text" placeholder="Input here" onChange={inputText}/>
            <p>Input Text: {value}</p>
        </div>
    )
}
export default InputField;