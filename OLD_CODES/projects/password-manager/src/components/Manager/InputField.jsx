import React from 'react';

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => {
    return (
        <div className="w-full">
            <input
                required
                name={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className="w-full p-2 px-5 text-sm border rounded-full outline-none border-zinc-500"
                type={type}
            />
        </div>
    );
};

export default InputField;
