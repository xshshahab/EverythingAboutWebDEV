import React from 'react'
import { Github, Twitter } from "lucide-react"

const Navbar = () => {

    const navLinks = [
        {
            id: 1201,
            href: "http://www.github.com/xshshahab",
            icon: <Github size={22} color='orange' />
        },
        {
            id: 1209,
            href: "http://www.x.com/xsh_shahab",
            icon: <Twitter size={22} color='orange' />
        }
    ]

    return (
        <nav className='flex items-center justify-between px-5 py-2.5 bg-zinc-950 md:px-40'>
            <div className="text-xl font-semibold md:text-2xl logo">
                <span className='text-orange-400'>&lt;</span>
                Unlok
                <span className='text-orange-400'>Password/&gt;</span>
            </div>
            <div className='flex gap-0.5'>
                {
                    navLinks.map((link) => {
                        return <a key={link.id} className='p-1.5 bg-transparent hover:bg-orange-50 rounded-3xl' href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    })
                }

            </div>
        </nav>
    )
}

export default Navbar