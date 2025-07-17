import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const appStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
  };
  return (
    <div style={appStyle}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App