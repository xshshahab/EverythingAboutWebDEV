import usePasswords from '../hooks/usePasswords';
import PasswordForm from './PasswordForm';
import PasswordList from './PasswordList';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [errors, setErrors] = useState({ site: "", username: "", password: "" });

    const { passwordArray, savePassword, deletePassword } = usePasswords();

    const handleSave = () => {
        if (!form.site || !form.username || !form.password) {
            setErrors({
                site: form.site ? "" : "This field is required",
                username: form.username ? "" : "This field is required",
                password: form.password ? "" : "This field is required"
            });
            return;
        }

        savePassword(form, isEditing, editingId);
        toast.success(isEditing ? "Password updated!" : "Password saved!");
        setForm({ site: "", username: "", password: "" });
        setIsEditing(false);
        setEditingId(null);
    };

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.info("Copied to clipboard!");
    };

    const handleEdit = (id) => {
        const itemToEdit = passwordArray.find(item => item.id === id);
        setForm({ site: itemToEdit.site, username: itemToEdit.username, password: itemToEdit.password });
        setIsEditing(true);
        setEditingId(id);
    };

    const handleDelete = (id) => {
        deletePassword(id);
        toast.success("Password deleted!");
    };

    return (
        <div className="flex flex-col w-full min-h-[85vh] gap-2 p-2 bg-zinc-800 md:px-40">
            <div id="top-cotainer">
                <div className="mt-4 text-2xl font-semibold text-center md:text-4xl logo">
                    <span className="text-orange-500">&lt;</span>
                    Unlok
                    <span className="text-orange-500">Password/&gt;</span>
                </div>
                <p className="mt-0.5 text-sm md:text-base font-semibold text-center text-green-100">
                    Your own password vault.
                </p>
            </div>

            <PasswordForm
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
                handleSave={handleSave}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                isEditing={isEditing}
            />

            <PasswordList
                passwordArray={passwordArray}
                handleCopyText={handleCopyText}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default Manager;
