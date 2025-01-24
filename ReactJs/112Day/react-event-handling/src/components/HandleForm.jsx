import React, { useState } from 'react'

const HandleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm(e.target.value)
    }


    return (

        <form>
            <label>Name : </label>
            <input value={form?.name} onChange={handleChange} type="text" placeholder='Enter name' />

            <br /><br />
            <label>Email : </label>
            <input value={form?.email} onChange={handleChange} type="email" placeholder='Enter email' />

            <br /><br />
            <label>Password : </label>
            <input value={form?.password} onChange={handleChange} type="password" placeholder='Enter password' />
        </form>

    )
}

export default HandleForm