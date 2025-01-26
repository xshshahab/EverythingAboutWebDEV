## Key Features of Redux Toolkit

1. `configureStore`:

- Simplifies store creation.
- Automatically sets up Redux DevTools and middleware (like Redux Thunk).

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

2. `createSlice`:

- Combines reducers, actions, and action types in a single function.
- Automatically generates action creators and types.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
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
```

3. `createAsyncThunk`:

- Handles async logic like fetching data.
- Automatically generates `pending`, `fulfilled`, and `rejected` action types.

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("/api/users");
  return response.data;
});
```

4.`DevTools Integration`:

- Redux DevTools work out-of-the-box for time-travel debugging.

  5.`Built-in Middleware`:

- Includes redux-thunk and allows adding custom middleware.

---

### Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

### Benefits of RTK

- **Boilerplate Reduction:** Combines logic and actions in slices.
- **Immutability:** Uses `Immer` internally to handle state updates immutably.
- **Scalability:** Works well for small and large apps alike.
- **Opinionated:** Guides you to follow best practices.
