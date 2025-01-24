import React from 'react'

const ClickEvent = () => {

    const handleClick = () => {
        alert("Hey, Syphar Clicked me!")
    }

    return (
        <button style={{ margin: "15px 0px" }} className='btn' onClick={handleClick}>Click me</button>
    )
}

export default ClickEvent