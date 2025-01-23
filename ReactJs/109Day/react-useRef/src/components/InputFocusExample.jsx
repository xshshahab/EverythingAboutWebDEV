import React, { useRef } from "react";

function InputFocusExample() {
    // Create a reference to the input element
    const inputRef = useRef(null);

    const handleFocus = () => {
        // Use the reference to focus the input element
        inputRef.current.focus();
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

    const inputStyle = {
        width: "250px",
        padding: "10px",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
    };

    const buttonStyle = {
        fontSize: "1rem",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "white",
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>useRef Example: Focus Input</h1>
            <input
                ref={inputRef} // Attach the ref to this input element
                type="text"
                placeholder="Click the button to focus me"
                style={inputStyle}
            />
            <br />
            <button onClick={handleFocus} style={buttonStyle}>
                Focus Input
            </button>
        </div>
    );
}

export default InputFocusExample;
