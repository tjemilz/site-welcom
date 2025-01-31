"use client";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from './Logo_Welcom.png'; // Assurez-vous de mettre le bon chemin vers votre logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 px-16 bg-black shadow-md">
      <div className="flex items-center">
        <a href="/">
        <Image 
          src={logo} 
          alt="Welcom Logo" 
          className="h-20 w-auto mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Ajout des classes pour l'effet de survol
        />
        </a>
      </div>
      <div className="hidden md:flex space-x-4">
        <NavLink href="/">Our Team</NavLink>
        <NavLink href="/events">Our Events</NavLink>
        <NavLink href="/">Welcome to Evry</NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 bg-gray-100 p-4">
          <NavLink href="/our-team" onClick={() => setIsOpen(false)}>
            Our Team
          </NavLink>
          <NavLink href="/our-events" onClick={() => setIsOpen(false)}>
            Our Events
          </NavLink>
          <NavLink href="/welcome-to-evry" onClick={() => setIsOpen(false)}>
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
    className="text-white-700 hover:text-blue-600 transition font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
