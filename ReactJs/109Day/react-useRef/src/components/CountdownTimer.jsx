import React, { useState, useRef } from "react";

function CountdownTimer() {
    // State to track the countdown time
    const [timeLeft, setTimeLeft] = useState(10);

    // Ref to store the interval ID (doesn't trigger re-renders)
    const timerRef = useRef(null);

    const startTimer = () => {
        // Prevent multiple timers from being set
        if (timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current); // Clear the timer when it hits 0
                    timerRef.current = null; // Reset the ref
                    return 0;
                }
                return prevTime - 1; // Decrease the time
            });
        }, 1000); // Run every 1 second
    };

    const stopTimer = () => {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current); // Stop the timer
            timerRef.current = null; // Reset the ref
        }
    };

    const resetTimer = () => {
        stopTimer(); // Ensure the timer is stopped
        setTimeLeft(10); // Reset the countdown to 10 seconds
    };

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

    const timerStyle = {
        fontSize: "1.5rem",
        margin: "20px 0",
        color: timeLeft === 0 ? "#f44336" : "#555", // Red if time is 0
    };

    const buttonStyle = {
        fontSize: "1rem",
        padding: "10px 15px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "white",
    };

    const startButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#4CAF50", // Green
    };

    const stopButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#f44336", // Red
    };

    const resetButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#007BFF", // Blue
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Countdown Timer</h1>
            <p style={timerStyle}>Time Left: {timeLeft}s</p>
            <button onClick={startTimer} style={startButtonStyle}>
                Start
            </button>
            <button onClick={stopTimer} style={stopButtonStyle}>
                Stop
            </button>
            <button onClick={resetTimer} style={resetButtonStyle}>
                Reset
            </button>
        </div>
    );
}

export default CountdownTimer;
