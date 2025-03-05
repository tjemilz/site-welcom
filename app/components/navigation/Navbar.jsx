"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-[#d7e2e9]");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-[#7a9cc6] shadow-lg transition duration-300"); // Couleur après scroll
      } else {
        setNavBg("bg-[#d7e2e9] transition duration-300"); // Couleur initiale
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
    <nav className={`fixed flex items-center justify-between top-0 left-0 w-full z-50 p-4 px-16 ${navBg}`}>
        <div className="flex items-center">
            <a href="/">
            <Image 
                src={"/Logo_Welcom.png"} 
                width = {180}
                height={20}
                alt="Welcom Logo"
                className="h-20 w-auto mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Ajout des classes pour l'effet de survol
            />
            </a>
            <NavLink href="/">Association Welcom'</NavLink>
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
        className="text-black hover:text-[#fffd98] transition font-medium text-xl"
        onClick={onClick}
    >
        {children}
    </Link>
);

export default Navbar;
