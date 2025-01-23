import React, { useState, useEffect, useRef } from "react";

const CounterApp = () => {
    // useState for controlling state updates
    const [count, setCount] = useState(0);

    // useRef to store the previous count value
    const prevCountRef = useRef();

    // This effect will update the previous count reference after every render
    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

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
    };

    const buttonStyle = {
        fontSize: "1rem",
        padding: "10px 15px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
    };

    const decrementButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#f44336", // Red color for decrement button
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Counter App</h1>
            <p style={paragraphStyle}>Current count: {count}</p>
            <p style={paragraphStyle}>Previous count: {prevCountRef.current}</p>
            <button
                style={buttonStyle}
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                style={decrementButtonStyle}
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    );
};

export default CounterApp;
