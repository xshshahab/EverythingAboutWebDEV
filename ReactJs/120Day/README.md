# What is React Redux Toolkit?

React Redux Toolkit (RTK) is the official, recommended way to use Redux in modern React applications. It simplifies working with Redux by providing a set of tools and abstractions to streamline common tasks like creating slices of state, writing reducers, and managing middleware.

## Why use Redux Toolkit?

Before Redux Toolkit, Redux required a lot of boilerplate code to set up, such as writing separate reducers, action creators, and constants. RTK addresses these pain points by:

- **Simplifying setup:** RTK provides helper functions like `configureStore` and `createSlice`, which reduce boilerplate.
- **Built-in tools:** Includes middleware like Redux Thunk for async actions and dev tools for debugging.
- **Best practices by default:** Enforces patterns like immutability and action standardization.

---

## Installation

```bash
npm install @reduxjs/toolkit react-redux
```

### Example App Structure

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
```
