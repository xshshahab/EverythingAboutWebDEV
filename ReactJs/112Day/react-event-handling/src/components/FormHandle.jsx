import React, { useState } from 'react';

const FormHandle = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
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
        console.log('Form Data:', form); // Do something with the form data
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                name="name" // Add a name attribute to match the state key
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter name"
            />

            <br />
            <br />
            <label>Email: </label>
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
            />

            <br />
            <br />
            <label>Password: </label>
            <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
            />

            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormHandle;
