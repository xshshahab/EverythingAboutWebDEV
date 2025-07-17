import React, { useState } from 'react'

const OnChangeEvent = () => {

    const [input, setInput] = useState("Syphar");

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div>
            <label>Name : </label>
            <input type="text" value={input} onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default OnChangeEvent