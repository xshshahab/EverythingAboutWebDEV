import React from 'react';
import copy from "../../assets/Copy.gif";
import edit from "../../assets/Edit.gif";
import trash from "../../assets/Trash.gif";

const PasswordList = ({ passwordArray, handleCopyText, handleEdit, handleDelete }) => {
    return (
        <div className="p-2 rounded-lg shadow-md md:p-6 md:mx-16 bg-neutral-900">
            <h2 className="mb-4 text-xl font-bold text-gray-200">Your Passwords</h2>
            <div className="overflow-x-auto">
                {
                    passwordArray.length === 0 ? (
                        <div className="text-sm text-center text-red-500">
                            No passwords saved yet. Add some passwords to see them here.
                        </div>
                    ) : (
                        <table className="w-full overflow-hidden text-left border-collapse rounded-md">
                            <thead>
                                <tr className="bg-orange-500 border-b border-orange-800">
                                    <th className="px-4 py-2 text-sm font-medium md:text-base text-zinc-900">Site</th>
                                    <th className="px-4 py-2 text-sm font-medium md:text-base text-zinc-900">Username</th>
                                    <th className="px-4 py-2 text-sm font-medium md:text-base text-zinc-900">Password</th>
                                    <th className="px-4 py-2 text-sm font-medium md:text-base text-zinc-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item) => (
                                    <tr key={item.id} className="bg-green-100 border-b border-green-900">
                                        <td className="px-4 py-2 text-zinc-800">
                                            <div onClick={() => handleCopyText(item.site)} className="flex items-center gap-3 cursor-pointer">
                                                <a className='text-sm' href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                                <img className='w-4 md:w-6' src={copy} alt="copy" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-zinc-800">
                                            <div onClick={() => handleCopyText(item.username)} className="flex items-center gap-3 cursor-pointer">
                                                <span className='text-sm'>{item.username}</span>
                                                <img className='w-4 md:w-6' src={copy} alt="copy" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-zinc-800">
                                            <div onClick={() => handleCopyText(item.password)} className="flex items-center gap-3 cursor-pointer">
                                                <span className='text-sm'>*****</span>
                                                <img className='w-4 md:w-6' src={copy} alt="copy" />
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-zinc-800">
                                            <div className="flex items-center gap-1.5 md:gap-3">
                                                <img className='w-5 cursor-pointer md:w-7' onClick={() => handleEdit(item.id)} src={edit} alt="edit" />
                                                <img className='w-5 cursor-pointer md:w-7' onClick={() => handleDelete(item.id)} src={trash} alt="trash" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    );
};

export default PasswordList;
