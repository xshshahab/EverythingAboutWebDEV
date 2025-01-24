# Handling Events in React

1. `State Handling:` `useState` is used to manage the state of the `message`.
2. `Event Handling:` The `handleClick` function is called when the button is clicked, updating the `message`.

## Form Handle

```jsx
import React, { useState } from "react";

const FormHandle = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Corrected handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setForm({
      ...form, // Spread the previous form state
      [name]: value, // Dynamically update the field based on the input's name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", form); // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        name="name" // Add a name attribute to match the state key
        value={form.name ? form.name : ""} // Use the state value
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
      />

      <label>Email: </label>
      <input
        name="email" // Add a name attribute to match the state key
        value={form.email ? form.email : ""}
        onChange={handleChange}
        type="email"
        placeholder="Enter email"
      />

      <label>Password: </label>
      <input
        name="password" // Add a name attribute to match the state key
        value={form.password ? form.password : ""}
        onChange={handleChange}
        type="password"
        placeholder="Enter password"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandle;
```
