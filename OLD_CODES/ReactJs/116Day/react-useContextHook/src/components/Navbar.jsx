import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navbarStyle = {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
    };

    return (
        <nav style={navbarStyle}>
            <h1>My Website</h1>
            <button onClick={toggleTheme} style={{ padding: "0.5rem 1rem" }}>
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
