import React from 'react';
import save from "../../assets/Save.gif"

const Manager = () => {
    return (
        <div className='flex flex-col w-full min-h-screen gap-5 px-5 py-2 md:px-40'>
            <div id="top-cotainer">
                <div className="mt-4 text-4xl font-semibold text-center logo">
                    <span className='text-green-500'>&lt;</span>
                    Unlok
                    <span className='text-green-500'>Password/&gt;</span>
                </div>
                <p className="mt-1 text-base font-semibold text-center text-green-100">
                    Your own password vault.
                </p>
            </div>

            <main id="container" className="flex flex-col items-center w-full gap-4 px-2 py-6 rounded-lg bg-zinc-800">
                <input placeholder='Enter your browser url' className='w-[86%] p-2 rounded-full border-zinc-500 text-sm outline-none px-5 border' type="text" />
                <div id="inputs" className='flex items-center justify-center w-full gap-2'>
                    <input className='p-2 w-[60%] border border-zinc-500 text-sm outline-none px-5 rounded-full' type="text" />
                    <input className='p-2 w-[25%] border border-zinc-500 text-sm outline-none px-5 rounded-full' type="text" />
                </div>


                <button className='flex items-center justify-center gap-3 px-4 py-2 font-medium bg-green-500 rounded-full outline-none cursor-pointer text-zinc-900 hover:bg-green-400'>
                    <img src={save} width={22} height={22} alt="save gif" />
                    <span>Save</span>
                </button>

            </main>

        </div>

    )
}

export default Manager