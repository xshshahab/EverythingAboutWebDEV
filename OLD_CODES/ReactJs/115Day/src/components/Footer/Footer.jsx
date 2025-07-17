import React from 'react'

const Footer = () => {
    return (
        <footer className="py-3.5 text-white bg-neutral-800">
            <div className="container flex flex-col items-center gap-1 px-4 mx-auto justify-evenly md:flex-row">
                <p className="text-gray-300">
                    Copyright &copy; uRouter <span className='font-medium text-gray-200'></span>| All rights reserved.
                </p>
                <p className="mt-2 text-gray-300 md:mt-0">
                    Created with <span className="text-red-500">❤️</span> by
                    <a
                        href="https://github.com/xshshahab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-green-400 transition duration-300 hover:text-green-500 hover:underline"
                    >
                        @xshshahab
                    </a>
                </p>

            </div>
        </footer>

    )
}

export default Footer