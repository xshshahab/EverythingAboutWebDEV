import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full text-white bg-zinc-800'>
            <div className="text-2xl font-bold text-white logo">
                <span className='text-green-500'> &lt;</span>
                <span>Unlok</span><span className='text-green-500'>Password/&gt;</span>
            </div>
            <div className='flex items-center justify-center'> Created with <img className='mx-2 w-7' src="icons/heart.png" alt="" /> by Md.Shahabuddin </div>
        </div>
    )
}

export default Footer
