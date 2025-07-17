import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>HEY COUNTER APP</h1>
      <h2>{counter}</h2>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default App;
