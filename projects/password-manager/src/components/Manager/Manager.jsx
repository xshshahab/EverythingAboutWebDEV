import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import save from "../../assets/Save.gif";
import copy from "../../assets/Copy.gif";
import edit from "../../assets/Edit.gif";
import trash from "../../assets/Trash.gif";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordArray, setPasswordArray] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (isEditing) {
            // Update existing password entry
            const updatedPasswords = passwordArray.map(item =>
                item.id === editingId ? { ...item, ...form } : item
            );
            setPasswordArray(updatedPasswords);
            localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
            toast.success("Password updated!");
            setIsEditing(false);  // Reset editing state
            setEditingId(null);
        } else {
            // Save new password
            const newPassword = { ...form, id: uuidv4() };
            setPasswordArray([...passwordArray, newPassword]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]));
            toast.success("Password saved!");
        }

        setForm({ site: "", username: "", password: "" });  // Clear form after saving
    };

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.info("Copied to clipboard!");
    };

    const handleEdit = (id) => {
        const itemToEdit = passwordArray.find(item => item.id === id);
        setForm({ site: itemToEdit.site, username: itemToEdit.username, password: itemToEdit.password });
        setIsEditing(true);  // Set editing mode to true
        setEditingId(id);  // Store the id of the item being edited
    };

    const handleDelete = (id) => {
        const updatedPasswords = passwordArray.filter(pass => pass.id !== id);
        setPasswordArray(updatedPasswords);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
        toast.success("Password deleted!");
    };

    return (
        <div className='flex flex-col w-full min-h-screen gap-2 px-5 py-2 bg-zinc-800 md:px-40'>
            <div id="top-cotainer">
                <div className="mt-4 text-2xl font-semibold text-center md:text-4xl logo">
                    <span className='text-green-500'>&lt;</span>
                    Unlok
                    <span className='text-green-500'>Password/&gt;</span>
                </div>
                <p className="mt-0.5 text-sm md:text-base font-semibold text-center text-green-100">
                    Your own password vault.
                </p>
            </div>

            <main id="container" className="flex flex-col items-center w-full gap-4 px-2 py-4">
                <input
                    required
                    name='site'
                    onChange={handleChange}
                    value={form.site}
                    placeholder='Enter website URL'
                    className='md:w-[86%] w-full p-2 rounded-full border-zinc-500 text-sm outline-none px-5 border'
                    type="text"
                />
                <div id="inputs" className='flex flex-col items-center justify-center w-full gap-4 md:gap-2 md:flex-row'>
                    <input
                        required
                        name='username'
                        onChange={handleChange}
                        value={form.username}
                        placeholder='Enter username'
                        className='p-2 md:w-[60%] w-full border border-zinc-500 text-sm outline-none px-5 rounded-full'
                        type="text"
                    />
                    <div
                        id="password"
                        className="flex items-center p-2 pl-3 pr-1 text-sm border rounded-full border-zinc-500"
                    >
                        <input
                            required
                            name='password'
                            onChange={handleChange}
                            value={form.password}
                            className="border-none w-full md:w-[90%] outline-none"
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
                    <span>{isEditing ? "Update" : "Save"}</span>
                </button>
            </main>

            <div id="table-container" className="p-2 rounded-lg shadow-md md:p-6 md:mx-16 bg-neutral-900">
                <h2 className="mb-4 text-xl font-bold text-gray-200">Your Passwords</h2>
                <div className="overflow-x-auto">
                    {
                        passwordArray.length === 0 ? (
                            <div className="text-center text-zinc-300">
                                No passwords saved yet. Add some passwords to see them here.
                            </div>
                        ) : (
                            <table className="w-full overflow-hidden text-left border-collapse rounded-md">
                                <thead>
                                    <tr className="bg-green-500 border-b border-green-900">
                                        <th className="px-4 py-2 font-medium text-zinc-900">Site URL</th>
                                        <th className="px-4 py-2 font-medium text-zinc-900">Username</th>
                                        <th className="px-4 py-2 font-medium text-zinc-900">Password</th>
                                        <th className="px-4 py-2 font-medium text-zinc-900">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        passwordArray.map((item) => (
                                            <tr key={item.id} className="bg-green-100 border-b border-green-900">
                                                <td className="px-4 py-2 text-zinc-800">
                                                    <div onClick={() => handleCopyText(item.site)} className="flex items-center gap-3 cursor-pointer ">
                                                        <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                                        <img width={22} src={copy} alt="copy" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-zinc-800">
                                                    <div onClick={() => handleCopyText(item.username)} className='flex items-center gap-3 cursor-pointer '>
                                                        <span>{item.username}</span>
                                                        <img width={22} src={copy} alt="copy" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-zinc-800">
                                                    <div onClick={() => handleCopyText(item.password)} className='flex items-center gap-3 cursor-pointer '>
                                                        <span>{item.password}</span>
                                                        <img width={22} src={copy} alt="copy" />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 text-zinc-800">
                                                    <div className='flex items-center gap-3'>
                                                        <img width={25} onClick={() => { handleEdit(item.id) }} className='cursor-pointer' src={edit} alt="edit" />
                                                        <img width={22} onClick={() => { handleDelete(item.id) }} className='cursor-pointer' src={trash} alt="trash" />
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

            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Manager;
