import { useState } from "react"
import { Menu } from "lucide-react"
import './Header.css'
import logo from '../assets/img/heart.png'


export default function StickyNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-white">
                <img src={logo} alt="Home" /> Home
                </a>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" 
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </a>
                <a href="/about" 
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                    About
                </a>
                <a href="/services" 
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                    Services
                </a>
                <a href="/contact" 
                className="text-gray-100 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </a>
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} >
                <Menu className="h-6 w-6 text-white" />
                </button>
            </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-gray-100 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                Home
                </a>
                <a href="/about" className="text-gray-100 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                About
                </a>
                <a href="/services" className="text-gray-100 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                Services
                </a>
                <a href="/contact" className="text-gray-100 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">
                Contact
                </a>
            </div>
            </div>
        )}
        </nav>
    )
}
