"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Image from "next/image";

const Navbar = () => {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-neutral-50 z-50 w-full p-4 shadow-md font-aileron font-bold">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="scroll-link">
            <Image src="/logo.png" alt="Tech Summit 2024" width={100} height={100} />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="scroll-link text-black hover:text-gray-700">About</a>
          <a href="#agenda" className="scroll-link text-black hover:text-gray-700">Agenda</a>
          <a href="#speakers" className="scroll-link text-black hover:text-gray-700">Speakers</a>
          <a href="#sponsors" className="scroll-link text-black hover:text-gray-700">Sponsors</a>
          <a href="#tickets" className="scroll-link text-black hover:text-gray-700">Registration</a>
          <a href="#contact" className="scroll-link text-black hover:text-gray-700">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-black">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#about" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">About</a>
          <a href="#agenda" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">Agenda</a>
          <a href="#speakers" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">Speakers</a>
          <a href="#sponsors" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">Sponsors</a>
          <a href="#tickets" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">Tickets</a>
          <a href="#contact" onClick={handleMenuToggle} className="scroll-link text-black hover:text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
