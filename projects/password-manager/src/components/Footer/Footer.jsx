import React from 'react'
import { Github, Twitter } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear();

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
        <footer className='px-5 py-2 bg-zinc-950 md:px-40'>
            <div id="top" className='flex items-center justify-between'>
                <div className="text-2xl font-semibold logo">
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
            </div>
            <div className="w-full h-[1px] my-3 bg-green-200"></div>
            <div id='bottom' className='flex items-center justify-center gap-1 text-sm'>
                <p>© {currentYear} All rights reserved.</p>
                <p>Created with ❤️ by <a target='_blank' className='text-green-400 hover:underline' href="https://instagram.com/xsh_shahab">@xsh_shahab</a></p>
            </div>
        </footer>
    )
}

export default Footer;
