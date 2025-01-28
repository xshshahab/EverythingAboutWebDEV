import React from 'react'
import { Github, Twitter } from "lucide-react"

const Navbar = () => {

    const navLinks = [
        {
            id: 1201,
            href: "http://www.github.com/xshshahab",
            icon: <Github size={24} color='green' />
        },
        {
            id: 1209,
            href: "http://www.x.com/xsh_shahab",
            icon: <Twitter size={24} color='green' />
        }
    ]

    return (
        <nav className='flex items-center justify-between px-5 py-2 bg-zinc-950 md:px-40'>
            <div className="text-xl font-semibold md:text-2xl logo">
                <span className='text-green-500'>&lt;</span>
                Unlok
                <span className='text-green-500'>Password/&gt;</span>
            </div>
            <div className='flex gap-1.5'>
                {
                    navLinks.map((link) => {
                        return <a key={link.id} className='p-1.5 bg-transparent hover:bg-green-50 rounded-3xl' href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    })
                }

            </div>
        </nav>
    )
}

export default Navbar