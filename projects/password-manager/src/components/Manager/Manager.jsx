import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from "lucide-react"
import save from "../../assets/Save.gif"
import copy from "../../assets/Copy.gif"

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
        setForm({
            site: "",
            username: "",
            password: ""
        });
    };

    return (
        <div className='flex flex-col w-full min-h-screen gap-2 px-5 py-2 bg-zinc-800 md:px-40'>
            <div id="top-cotainer">
                <div className="mt-4 text-4xl font-semibold text-center logo">
                    <span className='text-green-500'>&lt;</span>
                    Unlok
                    <span className='text-green-500'>Password/&gt;</span>
                </div>
                <p className="mt-0.5 text-base font-semibold text-center text-green-100">
                    Your own password vault.
                </p>
            </div>

            <main id="container" className="flex flex-col items-center w-full gap-4 px-2 py-4">
                <input name='site' onChange={handleChange} value={form.site} placeholder='Enter website URL' className='w-[86%] p-2 rounded-full border-zinc-500 text-sm outline-none px-5 border' type="text" />
                <div id="inputs" className='flex items-center justify-center w-full gap-2'>
                    <input name='username' onChange={handleChange} value={form.username} placeholder='Enter username' className='p-2 w-[60%] border border-zinc-500 text-sm outline-none px-5 rounded-full' type="text" />
                    <div
                        id="password"
                        className="flex items-center p-2 pl-3 pr-1 text-sm border rounded-full border-zinc-500"
                    >
                        <input
                            name='password'
                            onChange={handleChange}
                            value={form.password}
                            className="border-none w-[90%] outline-none"
                            placeholder="Enter Password"
                            type={showPassword ? "text" : "password"}
                        />
                        {showPassword ? (
                            <EyeOff
                                size={20}
                                className="text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <Eye
                                size={20}
                                onClick={() => setShowPassword(true)}
                                className="text-gray-400 cursor-pointer"
                            />
                        )}
                    </div>
                </div>


                <button onClick={handleSave} className='flex items-center justify-center gap-3 px-3.5 py-1.5 font-medium bg-green-500 border border-green-800 rounded-full outline-none cursor-pointer text-zinc-900 hover:bg-green-400'>
                    <img src={save} width={22} height={22} alt="save gif" />
                    <span>Save</span>
                </button>

            </main>


            <div id="table-container" className="p-6 mx-2 rounded-lg shadow-md md:mx-16 bg-neutral-900">
                <h2 className="mb-4 text-xl font-bold text-gray-200">Your Passwords</h2>
                <div className="overflow-x-auto">
                    {
                        passwordArray.length === 0 ? (
                            // Jab passwordArray khali ho
                            <div className="text-center text-gray-400">
                                No passwords saved yet. Add some passwords to see them here.
                            </div>
                        ) : (
                            // Jab passwordArray me data ho
                            <table className="w-full overflow-hidden text-left border-collapse rounded-md">
                                <thead>
                                    <tr className="bg-green-500 border-b border-green-900">
                                        <th className="px-4 py-2 font-medium text-zinc-900">Site URL</th>
                                        <th className="px-4 py-2 font-medium text-zinc-900">Username</th>
                                        <th className="px-4 py-2 font-medium text-zinc-900">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        passwordArray.map((item) => (
                                            <tr key={item.site} className="bg-green-100 border-b border-green-900">
                                                <td className="flex items-center gap-2 px-4 py-2 text-zinc-800">
                                                    <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                                    <img width={20} src={copy} alt="copy" />
                                                </td>
                                                <td className="px-4 py-2 text-zinc-800">
                                                    <div className='flex items-center gap-2 '>
                                                        <span>{item.username}</span>
                                                        <img width={20} src={copy} alt="copy" />
                                                    </div>
                                                </td>
                                                <td className="flex items-center gap-2 px-4 py-2 text-zinc-800">
                                                    <div className='flex items-center gap-2 '>
                                                        <span>{item.password}</span>
                                                        <img width={20} src={copy} alt="copy" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>


        </div>

    )
}

export default Manager