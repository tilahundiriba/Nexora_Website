import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 w-full z-50 
    transition-all duration-300 
    bg-blue-950/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="">
              <img
                src="/images/NexoraBG.png"
                alt="logoForNoxera"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:textxl md:text-2xl font-medium">
              <span className="text-white"> Nexora</span>
            </span>
          </div>
          {/* NavBar Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-blue-400 hover:text-white text-sm lg:text-base"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Contact
            </a>
           <button className="text-white font-bold p-1 w-35 h-10  items-center bg-blue-900 rounded-md">Get Started</button>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95
        backdrop-blur-lg border-t 
        border-blue-800 animate-in 
        slide-in-from-top duration-300 w-45
         rounded-md absolute top-15 right-5">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#home"
              className="block text-blue-400 hover:text-white text-sm lg:text-base "
            onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
             onClick={() => setMobileMenuOpen(false)}
            
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
             onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
             onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            onClick={() => setMobileMenuOpen(false)}
           >
              Contact
            </a>
             
              <button className="text-white font-bold p-1 w-35 h-10  items-center bg-blue-900 rounded-md">Get Started</button>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
