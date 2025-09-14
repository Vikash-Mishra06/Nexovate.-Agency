import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'projects' },
        { name: 'Testimonials', to: 'testimonials' },
        { name: 'Contact', to: 'contact' },
    ]

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [menuOpen])

    return (
        <header className="bg-black py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                >
                    <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
                        Nexovate <span className="text-white">.</span>
                    </div>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="text-white text-2xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <IoCloseSharp /> : <FaBars />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-10 text-lg font-poppins text-white">
                        {menuLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className={`cursor-pointer ${link.name === 'Home'
                                            ? 'text-themegreen'
                                            : 'hover:text-themegreen transition-colors'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-2xl text-white z-40">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setMenuOpen(false)} // close after click
                            className={`cursor-pointer ${link.name === 'Home'
                                    ? 'text-themegreen'
                                    : 'hover:text-themegreen transition-colors'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header
