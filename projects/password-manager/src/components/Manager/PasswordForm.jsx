import React from 'react';
import { Eye, EyeOff } from "lucide-react";
import InputField from './InputField';
import save from "../../assets/Save.gif";

const PasswordForm = ({ form, setForm, handleSave, showPassword, setShowPassword, isEditing }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const isFormValid = form.site && form.username && form.password;

    return (
        <div id="container" className="flex flex-col items-center w-full gap-4 px-2 py-4 md:px-20">
            <InputField
                name="site"
                value={form.site}
                onChange={handleChange}
                placeholder="Enter website URL"
            />

            <div id="inputs" className="flex flex-col items-center justify-center w-full gap-4 md:gap-2 md:flex-row">
                <InputField
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                />

                <div id="password" className="flex items-center p-2 pl-3 pr-1 text-sm border rounded-full border-zinc-500">
                    <input
                        required
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                        className="border-none w-full md:w-[90%] outline-none"
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                    />
                    {showPassword ? (
                        <EyeOff size={20} className="cursor-pointer text-zinc-400" onClick={() => setShowPassword(false)} />
                    ) : (
                        <Eye size={20} onClick={() => setShowPassword(true)} className="cursor-pointer text-zinc-400" />
                    )}
                </div>
            </div>
            <button
                onClick={handleSave}
                disabled={!isFormValid}
                className={`flex items-center justify-center gap-3 px-3.5 py-1.5 font-medium ${isFormValid ? 'bg-orange-500 hover:bg-orange-400' : 'bg-gray-400 cursor-not-allowed'} border border-zinc-800 rounded-full outline-none text-zinc-900`}
            >
                <img width={22} height={22} src={save} alt="save" />
                <span>{isEditing ? "Update" : "Save"}</span>
            </button>
        </div>
    );
};

export default PasswordForm;
