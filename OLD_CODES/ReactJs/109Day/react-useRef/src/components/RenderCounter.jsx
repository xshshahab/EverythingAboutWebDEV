import React, { useRef, useState, useEffect } from "react";

function RenderCounter() {
    // A state variable to trigger re-renders
    const [count, setCount] = useState(0);

    // useRef to hold the render count (doesn't trigger re-renders)
    const renderCount = useRef(1);

    useEffect(() => {
        // Increment the render count every time the component re-renders
        renderCount.current += 1;
    });

    // Inline styles
    const containerStyle = {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "'Arial', sans-serif",
    };

    const headingStyle = {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#333",
    };

    const paragraphStyle = {
        fontSize: "1.2rem",
        margin: "10px 0",
        color: "#555",
    };

    const buttonStyle = {
        fontSize: "1rem",
        padding: "10px 15px",
        marginTop: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Render Counter</h1>
            <p style={paragraphStyle}>Count: {count}</p>
            <p style={paragraphStyle}>
                This component has rendered {renderCount.current} times.
            </p>
            <button onClick={() => setCount(count + 1)} style={buttonStyle}>
                Increment Count
            </button>
        </div>
    );
}

export default RenderCounter;
