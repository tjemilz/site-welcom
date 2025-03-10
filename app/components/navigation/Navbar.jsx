"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("rgba(215, 226, 233, 1)"); // Couleur initiale

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500; // Ajustez cette valeur selon vos besoins
      const scrollRatio = Math.min(scrollY / maxScroll, 1);

      const startColor = [215, 226, 233]; // Couleur initiale (RGB)
      const endColor = [122, 156, 198]; // Couleur finale (RGB)

      const newColor = startColor.map((start, index) => {
        const end = endColor[index];
        return Math.round(start + (end - start) * scrollRatio);
      });

      setNavBg(`rgba(${newColor.join(",")}, 1)`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed flex items-center justify-between top-0 left-0 w-full z-50 p-4 px-16`} style={{ backgroundColor: navBg }}>
      <div className="flex items-center">
        <a href="/">
          <Image 
            src={"/Logo_Welcom.png"} 
            width={180}
            height={20}
            alt="Welcom Logo"
            className="h-20 w-auto mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110" // Ajout des classes pour l'effet de survol
          />
        </a>
        <NavLink href="/">Welcom'</NavLink>
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
