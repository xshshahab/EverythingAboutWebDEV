# Handling Events in React

### Explanation

1. `State Handling:` `useState` is used to manage the state of the `message`.
2. `Event Handling:` The `handleClick` function is called when the button is clicked, updating the `message`.

### Example:

```jsx
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello, World!");
  const [buttonText, setButtonText] = useState("Click Me");

  const handleClick = () => {
    setMessage("You clicked the button!");
    setButtonText("Click Again");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;
```
