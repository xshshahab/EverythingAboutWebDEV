import React, { useState } from 'react';

// Styling for buttons
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: "5px",
  border: "none",
  outline: "none"
};

const App = () => {
  // State to hold the current count
  const [count, setCount] = useState(0);

  // Handlers to update the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2 style={{ margin: "15px 0px", fontSize: "30px" }}>{count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
      <button onClick={decrement} style={buttonStyle}>Decrement</button>
    </div>
  );
};

export default App;
