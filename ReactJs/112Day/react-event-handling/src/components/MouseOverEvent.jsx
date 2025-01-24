import React from 'react'

const MouseOverEvent = () => {

    const handleMouseOver = () => {
        alert("test")
    }

    return (
        <div style={{
            padding: "20px",
            width: "233px",
            height: "345px",
            backgroundColor: "magenta",
            marginTop: "20px"
        }} onMouseOver={handleMouseOver}>Mouse Over Event</div>
    )
}

export default MouseOverEvent;