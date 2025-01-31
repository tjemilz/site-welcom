"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from './Logo_Welcom.png'; // Assurez-vous de mettre le bon chemin vers votre logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="flex items-center justify-between p-4 px-16 shadow-md" style={{ backgroundColor: '#7a9cc6' }}>
        <div className="flex items-center">
            <a href="/">
            <Image 
                src={logo} 
                alt="Welcom Logo" 
                className="h-20 w-auto mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Ajout des classes pour l'effet de survol
            />
            </a>
        </div>
        <div className="hidden md:flex space-x-8">
            <NavLink href="/payment">Trip to XXX</NavLink>
            <NavLink href="/events">Our Events</NavLink>
            <NavLink href="/welcoming">Welcome to Evry</NavLink>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden flex flex-col mt-4 space-y-2 bg-gray-100 p-4 absolute top-16 left-0 right-0 z-50">
                <NavLink href="/payment" onClick={() => setIsOpen(false)}>
                    Trip to XXX
                </NavLink>
                <NavLink href="/events" onClick={() => setIsOpen(false)}>
                    Our Events
                </NavLink>
                <NavLink href="/welcoming" onClick={() => setIsOpen(false)}>
                    Welcome to Evry
                </NavLink>
            </div>
        )}
    </nav>
);
};

// Composant de lien stylé
const NavLink = ({ href, children, onClick }) => (
    <Link
        href={href}
        className="text-black hover:text-[#fffd98] transition font-medium"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Navbar;
