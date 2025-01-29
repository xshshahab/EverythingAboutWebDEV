import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white bg-zinc-800'>
            <div className="flex items-center justify-between px-4 py-5 mycontainer h-14">
                <div className="text-2xl font-bold text-white logo">
                    <span className='text-green-500'> &lt;</span>
                    <span>Unlok</span><span className='text-green-500'>Password/&gt;</span>
                </div>
                <button className='flex items-center justify-between mx-2 my-5 text-white bg-green-700 rounded-full ring-white ring-1'>
                    <img className='w-10 p-1 invert' src="/icons/github.svg" alt="github logo" />
                    <span className='px-2 font-bold'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
